const express = require('express');
const app = express();
const body = require('body-parser');

app.use(body.urlencoded({
    extended:false
}))

app.get('/register',(req,res)=>{
    const out = `받은 데이터는 ${req.query.data}입니다`;

    res.send(out);
})
app.get('/register/:name',(req,res)=>{
    const out = `이름은 ${req.params.name}입니다`;

    res.send(out);
})
app.get('/register2',(req,res)=>{
    const out = `
    <form method="post" action="/register2"> 
        <input type="text" name="id">
        <input type="submit">
    </form>
    `;

    res.send(out);
})
app.post('/register2',(req,res)=>{
    const out = `post로 받은 건 ${req.body.id} `;
    res.send(out);
})

app.listen(3000,(req,res)=>{
    console.log("sever open");
    
})