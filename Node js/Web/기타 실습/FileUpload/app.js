const bodyparser = require('body-parser');
const express = require('express');
const app = express();

const multer =require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
      //cb(null, file.originalname); // 이렇게 하면 기존 파일 그대로 올라감.

    }
})
//multer가 저장 디렉토리와 파일이름을 지정하기 위해서
//콜백 함수를 실행한다.
var upload = multer({ storage: storage })

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


app.listen(4000,(req,res)=>{
    console.log("server conn");
})