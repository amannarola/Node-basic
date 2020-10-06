const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const { check, validationResult } = require('express-validator');
const { matchedData , sanitizeBody } = require('express-validator/filter');
var mw = require('./my-midleware.js');
app.use('/static',express.static('public'));

app.set('view engine','twig');
app.set('views','./public/views');

var urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.render('index',{title: "Login Form",message: 'Enter Username and Password'});
});

app.post('/',urlencodedParser,[check('username','Username should be email id').trim().isEmail(),
        check('password','Password must be in 5 Characters').trim().isLength({min:5}),
        check('cpassword').custom((value,{req})=>{
            if(value != req.body.password){
                throw new Error('Confirm Password does not match password');
            }
            return true;
        })
],(req,res)=>{
    const errors = validationResult(req);
    console.log(errors.mapped());
    if(!errors.isEmpty()){
        const user = matchedData(req);
        res.render('index',{title: "Users Details",error:errors.mapped(), user:user});
    }
    else{
        const user = matchedData(req);
        console.log(user);
        res.render('login',{title: "Users Details",user:user});
    }
    
});

app.post('/login',urlencodedParser,function(req,res){

    res.send('welcome,'+req.body.username)
});


app.listen(3000,()=>console.log("Server Running on port: 3000"));

