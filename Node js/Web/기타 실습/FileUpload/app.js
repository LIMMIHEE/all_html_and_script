const bodyparser = require('body-parser');
const express = require('express');
const app = express();

const multer =require('multer');
const upload = multer({dest:'uploads/'})

app.set("View","./views");
app.set("view engine","pug");

app.use(bodyparser.urlencoded({
    extended:false
}))


app.get('/',(req,res)=>{
    res.send('File  Upload');
})

//파일 업로드 폼
app.get('/upload',(req,res)=>{
    res.render('new');
})
//https://github.com/expressjs/multer/blob/master/doc/README-ko.md
//멀터 참조 문서
app.post('/upload',upload.single('userfile'),(req,res)=>{
    res.send(req.file);
})
//single뒤 에는 변수 이름이 들어감


app.listen(3000,(req,res)=>{
    console.log("server conn");
})