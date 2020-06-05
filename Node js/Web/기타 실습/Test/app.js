const express = require('express');
const body = require('body-parser');
const app = express();

app.use(body.urlencoded({
    extended:false
}))

app.set('Views','/public/Views');
app.set('view engine','pug');

app.get('/subject/new',(req,res)=>{
    res.render('index');
})
app.post('/subject/new',(req,res)=>{
    const out = `${req.body.title} 과 ${req.body.info}를 입력받았다.`;
    res.send(out);
})

app.listen(3000,(req,res)=>{
    console.log('server is open');
})