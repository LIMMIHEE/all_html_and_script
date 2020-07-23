const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/test'; // test:DB이름
mongoose.connect(url);
let db = mongoose.connection;

db.once('open',()=>{
    console.log('DB conn');
})
db.on('error',(err)=>{
    console.log(err);
})

const Company = mongoose.Schema({
    company:'string',
    count:'number',
    name:'string',
    degree:'string',
    tel:'string',
    email:'string'
});

const Attend = mongoose.model('Attend',Company);

app.use(express.static('public'));
app.use(bodyparser.urlencoded({
    extended:false
}))


app.set("View","./views");
app.set("view engine",'pug');

app.get('/',(req,res)=>{
    res.send('Welcome Company!');
})
app.get('/apply',(req,res)=>{
    res.render('new');
})
app.post('/apply',(req,res)=>{
    
    let data = new Attend({
        company:req.body.name,
        count:req.body.sum,
        name:req.body.Representative,
        degree:req.body.officialRepresentative,
        tel:req.body.telnum,
        email:req.body.email
    })  
    data.save((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            console.log('save !!');
            res.redirect('/');
        }
    })
})

app.get('/list',(req,res)=>{
    
})
app.listen(3000,(req,res)=>{
    console.log('server conn');
})