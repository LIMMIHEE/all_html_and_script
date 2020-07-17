const express = require('express');
const app = express();
const bodyparser = require('body-parser');


//1. mongoose 만들기
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const url = 'mongodb://localhost:27017/test'; 
//const url = 'mongodb://localhost:27017/test'
mongoose.connect(url);
//mongoose.connect(url);
let db = mongoose.connection;
//let db = mongoose.connetion;

db.once('open',()=>{
    console.log('DB conn');
})
// db.once('open',(){ console.log('DB conn')})

db.on('error',(err)=>{
    console.log('db 연결 에러');
})
// db.on('error',(err)=>{console.log(err)})

//2. 스,키마 생성
const person = mongoose.Schema({
    name : { type:'string', required:true,unique : true},
    age : 'number',
    addr : 'string'
})
//required:true == not null
//unique : true == primary key
//mongo db는 숫자 'number'로 표현함

//3. 모델 생성
//위에서 만든 스키마 구조(person)을 따라서 student 컬렉션을 만들겠다
const student = mongoose.model('student', person);

var _name;
var _age ;
var _addr;

app.set("Views","./Views"); 
app.set("view engine",'pug');


app.use(express.static('public'));
app.use(bodyparser.urlencoded({
    extended:false
}))

app.get('/', (req,res)=>{
    res.send('<h1>Hi mongo</h1>');
})

app.get('/new',(req,res)=>{
    res.render('new')
})
app.post('/new',(req,res)=>{
     _name = req.body.name;
     _age = req.body.age;
     _addr = req.body.addr;

    //4. 데이터 넣기
    // mongo의 데이터 넣기 명령어 : insert
    //let data = new student({필드이름:값, 필드이름 : 값 .....});
    let data = new student({name:_name,age:_age,addr:_addr});
    data.save((err,docs)=>{
        if(err){
            console.log(err);
        }else{
            console.log('saves');
            //리다이렉션
            res.redirect('/');
        }
    })
})


app.listen(3000,(req,res)=>{
    console.log('server conn');
})