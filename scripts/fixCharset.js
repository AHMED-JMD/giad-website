// Run with: npm run fix:charset
// One-time repair for databases created before utf8mb4 was set explicitly.
// Converts the database and its tables to utf8mb4 so Arabic text can be stored.
require("dotenv").config();
const sequelize = require("./../config/sequelize");

const CHARSET = "utf8mb4";
const COLLATE = "utf8mb4_general_ci";

const query = async (sql, options) => {
  const [rows] = await sequelize.query(sql, options);
  return rows;
};

const reportState = async (label) => {
  const [db] = await query(
    "SELECT DEFAULT_CHARACTER_SET_NAME cs, DEFAULT_COLLATION_NAME coll " +
      "FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = DATABASE()",
  );
  const tables = await query(
    "SELECT TABLE_NAME name, TABLE_COLLATION coll " +
      "FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() " +
      "AND TABLE_TYPE = 'BASE TABLE' ORDER BY TABLE_NAME",
  );

  console.log(`\n--- ${label} ---`);
  console.log(`database: ${db.cs} / ${db.coll}`);
  for (const t of tables) {
    const ok = String(t.coll).startsWith(CHARSET) ? "ok " : "BAD";
    console.log(`  ${ok} ${t.name}: ${t.coll}`);
  }
  return tables;
};

// Verifies Arabic survives a real write. Rolled back so nothing is persisted.
const verifyArabic = async () => {
  const sample = "قطع غيار المحركات";
  const tx = await sequelize.transaction();
  try {
    await query(
      "CREATE TEMPORARY TABLE charset_probe (v VARCHAR(255)) " +
        `DEFAULT CHARSET=${CHARSET} COLLATE=${COLLATE}`,
      { transaction: tx },
    );
    await query("INSERT INTO charset_probe (v) VALUES (:sample)", {
      replacements: { sample },
      transaction: tx,
    });
    const [row] = await query("SELECT v FROM charset_probe", {
      transaction: tx,
    });
    await tx.rollback();
    return row.v === sample
      ? { ok: true }
      : { ok: false, reason: `round-trip mismatch: got "${row.v}"` };
  } catch (err) {
    await tx.rollback();
    return { ok: false, reason: err.parent ? err.parent.message : err.message };
  }
};

const run = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error(`Cannot connect to MySQL: ${err.message}`);
    process.exit(1);
  }

  const tables = await reportState("before");

  const dbName = sequelize.getDatabaseName();
  await query(
    `ALTER DATABASE \`${dbName}\` CHARACTER SET ${CHARSET} COLLATE ${COLLATE}`,
  );

  let failed = 0;
  for (const t of tables) {
    if (String(t.coll).startsWith(CHARSET)) continue;
    const convert = `ALTER TABLE \`${t.name}\` CONVERT TO CHARACTER SET ${CHARSET} COLLATE ${COLLATE}`;
    try {
      await query(convert);
      console.log(`converted ${t.name}`);
    } catch (err) {
      const msg = err.parent ? err.parent.message : err.message;
      // Old InnoDB formats cap index keys at 767 bytes, which utf8mb4
      // varchar(255) columns exceed. DYNAMIC row format lifts that.
      if (/too long/i.test(msg)) {
        console.log(`${t.name}: retrying with ROW_FORMAT=DYNAMIC (${msg})`);
        try {
          await query(`ALTER TABLE \`${t.name}\` ROW_FORMAT=DYNAMIC`);
          await query(convert);
          console.log(`converted ${t.name}`);
          continue;
        } catch (retryErr) {
          const retryMsg = retryErr.parent
            ? retryErr.parent.message
            : retryErr.message;
          console.error(`FAILED ${t.name}: ${retryMsg}`);
          failed += 1;
          continue;
        }
      }
      console.error(`FAILED ${t.name}: ${msg}`);
      failed += 1;
    }
  }

  await reportState("after");

  const probe = await verifyArabic();
  console.log(
    probe.ok
      ? "\nArabic round-trip: OK"
      : `\nArabic round-trip: FAILED (${probe.reason})`,
  );

  await sequelize.close();
  process.exit(failed === 0 && probe.ok ? 0 : 1);
};

run();
