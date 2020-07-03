const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const url = 'mongodb://localhost:27017/test'; // test:DB이름
mongoose.connect(url);
let db = mongoose.connection;

db.once('open',()=>{
    console.log('DB conn');
})//한번만 접속한다. open은 한번 열렸으면 

db.on('error',(err)=>{
    console.log(err);
})//error이벤트가 발생하면 이렇게 하라



app.use(bodyparser.urlencoded({
    extended:false
}))


app.listen(2000,(req,res)=>{
    console.log('sever conn');
})


//2. 스키마 설정
const person=mongoose.Schema({
    name:'string',
    age:'number',
    addr:'string'
});


//3. 모델 생성 (컬렉션 생성)
const Student = mongoose.model('student',person); 
                            // 컬렉션 이름, 스키마
//이제 Student가 student테이블 가르킨다
//실제 데이터 베이스에는 Students로 자동 복수로 저장된다 (students)

