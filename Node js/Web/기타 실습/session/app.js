const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const session = require('express-session')
var app_file = require('session-file-store')(session);
//세션을 매개변수로 넘어가게 해야한다
 
var fileStoreOptions = {};
 

app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(session({
    secret: 'keyboard cat', //남들이 알아볼 수 없는 이상한 값으로 넣어줘라
    resave: false, // 접속할때마다, sid를 새로 발급하지 말아라
    saveUninitialized: true, // 세션을 실제 사용하기 전까지는 sid를 발급하지 말아라
    store: new app_file(fileStoreOptions), //나는 fileStoreOptions에 파일을 저장할거다
    secret: 'keyboard cat'
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