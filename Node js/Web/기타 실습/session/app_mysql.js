const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
//세션을 매개변수로 넘어가게 해야한다
 
var options = {
    host:'localhost',
    user:'root',
    password:'1234',
    database:'test'
};
var sessionStore = new MySQLStore(options);

app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(session({
    key: 'session_cookie_name',
    store: sessionStore,
    secret: 'keyboard cat', //남들이 알아볼 수 없는 이상한 값으로 넣어줘라
    resave: false, // 접속할때마다, sid를 새로 발급하지 말아라
    saveUninitialized: false, // 세션을 실제 사용하기 전까지는 sid를 발급하지 말아라
}))


const user={
    username :"kim",
    password:1111,
    displayName:'WISH'
}

app.get('/',(req,res)=>{
    res.send('Hi session');
})

app.get('/login',(req,res)=>{
    let output = `<form method="post" acrion="/login">
    <input type = "text" name = "username" placeholder="이름">
    <input type="password" name="password" placeholder="비밀번호">
    <input type="submit" value="전송" >
    <form>
    `
    res.send(output);
})
app.post('/login',(req,res)=>{
    //입력값 받아오고 아이디 비번 비교하기
    //맞으면 맞았다고 콘솔에 하기, 틀리면 리다이렉션
    const _docs = req.body;
    if(_docs.username == user.username && _docs.password == user.password){
        console.log('맞았습니다.')
        req.session.displayName = user.displayName
        req.session.username = user.username 
        res.redirect('welcome')
    }else{
        console.log('틀렸습니다.')
        res.redirect('login')
    }
})

app.get('/welcome',(req,res)=>{
    if(req.session.displayName){
        let output = `<h2>welcome, ${req.session.displayName} 님 반갑습니다. <a href="logout" >로그아웃</a></h2>
        
        `
        res.send(output);
    }else{
        let output = `<h2>welcome. <a href="/login" >로그인</a></h2>
        
        `
        res.send(output);
        //res.redirect('login')
    }
})
app.get('/logout',(req,res)=>{
    delete req.session.displayName
    res.redirect('login')
})
app.listen(3000,(req,res)=>{
    console.log('서버 연결');
})