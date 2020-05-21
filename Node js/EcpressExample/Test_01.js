const express = require('express');
const app = express();


app.use((req,res,next)=>{ // req,res : 객체 (속성 추가, 메서드 추가)
    console.log("첫번째 미들웨어 호출됨");
    req.user = 'kim';
    
    next();
})


app.use((req,res,next)=>{
    console.log("두번째 미들웨어 호출됨");
    // res.send(req.user);    
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    // res.write("<h1>서버에서 응답보냄</h1>");
    // res.send();


    const person={
        'name':'lee',
        'age':23,
        
    }
    //person을 응답으로
    // res.send(person);
    //객체를 문자열로 변환하는 메소드
    const strPerson=JSON.stringify(person);//JSON 을 문자열로 변환
    res.send(strPerson)
    //문자열을 JSON으로 바꾸는 법.
    const JSONPerson =  JSON.parse(strPerson);

    res.redirect('https://nodejs.org/ko/');


})

app.listen(2000,()=>{
    console.log("servern open");
})