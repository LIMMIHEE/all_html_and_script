const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended:false
}))
var cookieParser = require('cookie-parser')
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send('hello cookie')
})
//Cookie 사용 위한 모듈은 Cookie-parser

let count=0;
app.get('/counting',(req,res)=>{
    
    if(req.cookies.count){//쿠키가 존재하는지 확인
        count = parseInt(req.cookies.count) +1

    }else{// 쿠키가 없는 지 확인 ( 첫번째 방문?)
        count = 0
    }
    
    //쿠키의 원리 : 처음 접속했을때 서버에서 쿠키를 만들고 클라이언트에 보냄
    // 그러면 클라이언트는 그 쿠키 저장, 두번째 접속하면 쿠키가 서버에 같이 따라감
    // 그러면 서버는 쿠키가 있으니까 처음 온게 아니구나 하고 인식함

    res.cookie('count',count) //얘는 cookie-parser라는 모듈 때문에 만들어진다.
    //서버가 브라우저에 보내는 쿠키의 이름은 count, 값은 1이다.
    // 이러면 브라우저가 count를 가지고 있는다. ( 2번째 접속에는 아지고 있음)

    //쿠키는 req.cookies.이름 으로 접근할 수 있다.
    res.send('Count : '+count)
})
//쿠키로 방문 카운팅 하기

app.listen(3000,(req,res)=>{
    console.log('server open')
})