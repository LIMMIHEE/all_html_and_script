const express = require('express');
const app = express();


app.use((req,res,next)=>{
    console.log('미들웨어 호출');
    let userAgent = req.header('User-Agent');
    res.send("당신이 접속한 기기는 "+userAgent+"입니다");
    console.dir(req.header);
    console.log(req.header);
})



app.listen(2000,(req,res)=>{
    console.log(" 서버 연결 완료");
    
})