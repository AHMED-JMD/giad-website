// // process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
 require('dotenv').config();  
var api_key = process.env.API_KEY;
var domain = process.env.DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const sendMail = (name, email, subject, text, phoneNum,cb) =>{
   try{
   const data = {
    from: email,
    to: 'contact.giadms@gmail.com',
    subject: ` Message From The Website `,
    text: ` name is ${name} \n party is ${subject} \n message is ${text} \n phone number is ${phoneNum}` ,
   };

   mailgun.messages().send(data, function (error, body) {
     if(error){
       cb(err, null)
     }else{
       cb(null, data)
    console.log(body);
     } 
  });

 } catch(e){ console.log(e)};
 };
 module.exports = sendMail;