const express = require('express');
const app = express();

app.use(express.static('public'));
//정적인 파일이 들어갈 디렉토리를 지정한다.

app.get('/',(req,res)=>{
    res.send(' Hi nodejs');
    //res.redirect('static.html');
})
app.get('/dynamic',(req,res)=>{

    let list = ``;
    for(let i=0; i<5; i++){
        list += "<li>coding</li>"
    }
    let time = Date();
 
    let output =`<!DOCTYPE html>     
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Hello</title>
        </head>
        <body>
            Hello Node js
            <ul>
            
            ${list} 
            
            </ul>
            ${time}
        </body>
    </html>`;
    res.send(output);
})

app.get('/login',(req,res)=>{
    res.send('<h1 style="color:blue;">Plz Login</h1> <ul><li>test</li></ul>');
})

app.listen(2000,()=>{
    console.log("서버 오픈");
})