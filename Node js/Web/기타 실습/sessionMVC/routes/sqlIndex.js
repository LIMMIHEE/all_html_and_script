const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Hi session');
})

router.get('/login',(req,res)=>{
    let output = `<form method="post" acrion="/login">
    <input type = "text" name = "username" placeholder="이름">
    <input type="password" name="password" placeholder="비밀번호">
    <input type="submit" value="전송" >
    <form>
    `
    res.send(output);
})
router.post('/login',(req,res)=>{
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

router.get('/welcome',(req,res)=>{
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
router.get('/logout',(req,res)=>{
    delete req.session.displayName
    res.redirect('login')
})
module.exports = router