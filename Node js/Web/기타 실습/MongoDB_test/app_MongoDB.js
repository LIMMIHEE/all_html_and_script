const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const url = "mongodb://localhost:27017/test";

mongoose.connect(url);

//몽구스 세팅
let db = mongoose.connection;

db.once('open',()=>{
    console.log('DB conn');
})
db.on('error',(err)=>{
    console.log(err);
})



//스키마 생성
const login = mongoose.Schema({
    id : 'number',
    uid:'string',
    passwd:'string'
});
//모델 생성
const loginMongoose = mongoose.model('login',login);


app.listen(3000,(req,res)=>{
    console.log("Server Conn");
})
