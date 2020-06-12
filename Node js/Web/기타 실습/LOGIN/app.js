// const user = {
//     userid:'kim',
//     password:'1111',
//     client:[
        
//     ]
// }

const User =[

];

//로그인 : 아이디 비번 ( LoginForm.pug )
//회원가입 : 아이디, 이름, 이메일, 핸드폰 ( RegisterForm.pug )

//회원가입에서 받은 값은 User 라는 곳에 저장하기?

const express = require('express');
const fs = require('fs');
const app = express();

app.set('View','./Views');
app.set('view engine','pug');


app.get('/',(req,res)=>{
    const out ="<html><head></head><body><a href='/login'>로그인 하기 </a><p></p><a href='/register'>회원가입 하기</a><p></p><a href='/clientList'>회원 목록</a></body></html>";
    res.send(out);
})

app.get('/login',(req,res)=>{
    res.render('LoginForm')
})
app.get('/register',(req,res)=>{
    res.render('RegisterForm')
})
app.post('/register',(req,res)=>{

    
    let User_id = req.body.id;
    let User_pass = req.body.pass;
    let User_name = req.body.name;
    let User_mail = req.body.mail;
    let User_phoneCall = req.body.phoneCall;

    User.push({id:User_id , pass:User_pass,name:User_name,mail:User_mail,phoneCall:User_phoneCall});

    console.log("회원 정보 입력 완료");
    res.redirect('/');
    
})

app.get('/clientList',(req,res)=>{
    
})

app.listen(3000,(req,res)=>{
    console.log('server conn!!');
    
})
