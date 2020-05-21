const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('HI node js'); 
});

app.listen(5000,()=>{
    console.log('express web server at localhost');
});