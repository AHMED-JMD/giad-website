const express = require('express');
const app = express();
const sendMail = require('./mail');
const path = require('path');
require('dotenv').config();
var quickemailverification = require('quickemailverification').client(process.env.VERIFIER_KEY).quickemailverification(); 

const xssFilter = require('xss-filters');

//middlewares
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes to hide page extensions  
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
});
app.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname,'./public/about.html'))
});
app.get('/products', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/products.html'))
});
app.get('/services-centers', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/services-centers.html'))
});
app.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname,'./public/contact.html'))
});




//post rout

//post 
app.post('/email', async (req, res,next) =>{
    let {name,email, subject, text, phoneNum} = req.body;
    
    if(!name || !email || !subject || !text || !phoneNum){
        return res.status(400).json({msg:'please enter all feilds'});
    }
//filter input feilds 
name = xssFilter.inHTMLData(name),
email = xssFilter.inHTMLData(email),
subject = xssFilter.inHTMLData(subject),
text = xssFilter.inHTMLData(text),
phoneNum = xssFilter.inHTMLData(phoneNum)
    
  
    //verify email address
//  let verifier = new Verifier(process.env.VERIFIER_KEY);
//   verifier.verify(email, (err, data) =>{
//       if(err) console.log(err);
//       console.log(data);
//   })

    sendMail(name, email, subject, text, phoneNum, (err, data) =>{
                    
        if(err){
            res.status(500).json({err: 'internal error', error:err})
        }else{
            res.json('تم ارسال الرسالة بنجاح, سيتم التواصل قي اقرب وقت ممكن ');
        }
               
});
   
});


app.use('/en', require('./routes/en-route'));

app.use( (req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, './public/404.html'));
});
//listening to port
const port = process.env.PORT || 7894;
app.listen(port, ()=> console.log(`server running on port ${port}`));