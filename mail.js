const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
// process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
require('dotenv').config();


const auth = {
  auth:{
    domain: process.env.DOMAIN,
    api_key: process.env.API_KEY

  }
}

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (name, email, subject, text, phoneNum,cb) =>{
  const data = {
   from: email,
   to: 'giadmotorservices@gmail.com',
   subject: ` ${name} | ${subject}  `,
   text: `${text} phone numer is ${phoneNum}` ,
  
  };
  transporter.sendMail(data, (err, data)=>{
    if(err){
     cb(err, null);
    }else{
     cb(null, data);
    }
  });
};

module.exports = sendMail;