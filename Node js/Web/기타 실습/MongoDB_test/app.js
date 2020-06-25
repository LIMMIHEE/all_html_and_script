const express = require('express');
const app =express();


const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended:false
}))


app.get('/',(req,res)=>{
    res.send('HI MONGO DB');
})

app.listen(3888,(req,res)=>{
    console.log('server conn');
    
})