const express = require('express');
const router = express.Router();
const path = require('path');
var quickemailverification = require('quickemailverification').client(process.env.VERIFIER_KEY).quickemailverification(); 
const xssFilter = require('xss-filters');

//english pages goes here
router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/index-en.html'))
});
router.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/about-en.html'))
});
router.get('/products', (req,res) =>{
    res.sendFile(path.join(__dirname,'../public/products-en.html'));
});
router.get('/services-centers', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/services-centers-en.html'))
});
router.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname,'../public/contact-en.html'))
});

//post route
router.post('/email', async (req, res,next) =>{
    let {name,email, subject, text, phoneNum} = req.body;
    
    if(!name || !email || !subject || !text || !phoneNum){
        return res.status(400).send({msg:'please enter all feilds'});
    }
//filter input feilds 
name = xssFilter.inHTMLData(name),
email = xssFilter.inHTMLData(email),
subject = xssFilter.inHTMLData(subject),
text = xssFilter.inHTMLData(text),
phoneNum = xssFilter.inHTMLData(phoneNum)
    
   
    //verify email address
quickemailverification.verify(email, (err, response) =>{
    console.log(response.body)
})

    sendMail(name, email, subject, text, phoneNum, (err, data) =>{            
        if(err){
            res.status(500).json({err: 'internal error', error:err.data})
        }else{
            res.json('Message Sent , We Will be in touch soon');
        }
});
   
});

router.use( (req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, '../public/404-en.html'));
});
module.exports = router;