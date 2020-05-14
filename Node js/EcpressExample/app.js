const express = require('express');

const app = express(); //express는 함수, 함수를 실행하면 application 객체 생성
app.get('/',(req,res)=>{
    res.send('hello Nodejs'); //클라이언트 요청이 들어왔을때 서버에서 보내는 응답.
})
app.get('/login',(req,res)=>{
    res.send('Plz login'); 
})
//루트 디렉토리로 접속해라. 루트로 접속 끝나면 서버에서 응답 뿌려줌.
app.get('/logout',(req,res)=>{

    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1> PLZ logout</h1>');
    res.end();
    //res.send('logout !!'); 
})
//로그아웃 (logout)
app.get('/register',(req,res)=>{
    res.send('register PLZ'); 
})
//회원가입 (register)
app.get('/cart',(req,res)=>{
    res.send('cart is null'); 
})
//장바구니 (cart)

app.listen(3000,()=> {
    console.log('express web server at localhost');
    
})