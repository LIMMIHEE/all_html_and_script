const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const indexRouter = require('./routes/index')
const session = require('express-session')
var app_file = require('session-file-store')(session);

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
app.use('/',indexRouter)


app.listen(3000,(req,res)=>{
    console.log('서버 conn');
})