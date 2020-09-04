const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
//세션을 매개변수로 넘어가게 해야한다

const indexRouter = require('./routes/index')
 
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
app.use('/',indexRouter)

const user={
    username :"kim",
    password:1111,
    displayName:'WISH'
}

app.listen(3000,(req,res)=>{
    console.log('서버 연결');
})