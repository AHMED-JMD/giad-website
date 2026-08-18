// Run with: npm run export:products
// Builds docs/product-map.txt from client/src/context/languages.js so the
// Arabic name, English name and image filename stay in one reviewable place.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "client/src/context/languages.js");
const IMAGE_DIR = path.join(ROOT, "client/public/assets/images");
const OUTPUT = path.join(ROOT, "docs/product-map.txt");

// languages.js is an ES module; evaluate it as CommonJS to read the real data
// instead of re-typing it.
const loadLanguages = () => {
  const src = fs.readFileSync(SOURCE, "utf8").replace(/^export\s+const\s+/m, "const ");
  const module = { exports: {} };
  new Function("module", "exports", `${src}\nmodule.exports = Languages;`)(
    module,
    module.exports,
  );
  return module.exports;
};

const GROUPS = [
  { key: "giadOils", label: "GIAD OILS" },
  { key: "filters", label: "FILTERS" },
  { key: "batteries", label: "BATTERIES" },
];

// Arabic renders right-to-left in terminals, so pad on display width only.
const pad = (s, width) => s + " ".repeat(Math.max(0, width - [...s].length));

const build = () => {
  const langs = loadLanguages();
  const ar = langs.Ar.Products.body;
  const en = langs.En.Products.body;

  const lines = [];
  const warnings = [];
  let total = 0;

  lines.push("GIAD PRODUCT MAP");
  lines.push("Arabic name | English name | image file");
  lines.push(`Source: client/src/context/languages.js`);
  lines.push(`Images: client/public/assets/images/`);
  lines.push("");

  for (const { key, label } of GROUPS) {
    const arItems = ar[key]?.products || [];
    const enItems = en[key]?.products || [];
    const enByImage = new Map(enItems.map((p) => [p.image, p.title]));

    const rows = arItems.map((item) => {
      const english = enByImage.get(item.image);
      if (english === undefined) {
        warnings.push(`${key}: no English entry for image ${item.image}`);
      }
      if (!fs.existsSync(path.join(IMAGE_DIR, item.image))) {
        warnings.push(`${key}: image file missing on disk -> ${item.image}`);
      }
      return { ar: item.title, en: english || "(missing)", image: item.image };
    });

    // English-only rows would otherwise vanish from the map.
    const arImages = new Set(arItems.map((p) => p.image));
    for (const item of enItems) {
      if (!arImages.has(item.image)) {
        warnings.push(`${key}: no Arabic entry for image ${item.image}`);
        rows.push({ ar: "(missing)", en: item.title, image: item.image });
      }
    }

    const arW = Math.max(...rows.map((r) => [...r.ar].length), 12);
    const enW = Math.max(...rows.map((r) => [...r.en].length), 12);

    lines.push(`== ${label} (${ar[key]?.title || ""} / ${en[key]?.title || ""}) — ${rows.length} items`);
    lines.push(`${pad("ARABIC", arW)}  ${pad("ENGLISH", enW)}  IMAGE`);
    lines.push(`${"-".repeat(arW)}  ${"-".repeat(enW)}  ${"-".repeat(12)}`);
    for (const r of rows) {
      lines.push(`${pad(r.ar, arW)}  ${pad(r.en, enW)}  ${r.image}`);
    }
    lines.push("");
    total += rows.length;
  }

  lines.push(`TOTAL: ${total} products`);
  if (warnings.length) {
    lines.push("");
    lines.push("WARNINGS");
    warnings.forEach((w) => lines.push(`  - ${w}`));
  }

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, lines.join("\n") + "\n", "utf8");
  console.log(`Wrote ${path.relative(ROOT, OUTPUT)} (${total} products, ${warnings.length} warnings)`);
  warnings.forEach((w) => console.log(`  warning: ${w}`));
};

build();
