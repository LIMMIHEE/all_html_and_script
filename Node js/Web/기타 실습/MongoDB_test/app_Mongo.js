const express = require('express');
const app = express();
const bodyparser = require('body-parser');


//MongoClient로 연결
const MongoClient = require('mongodb').MongoClient;
//몽고디비 클라이언트 설정
const url="mongodb://localhost:27017";
//몽고 디비에 접속하는 URL
const dbname = "test";
//접속할 데이터베이스 이름 설정

let db;//데이터 베이스 객체를 가르킬 변수
let login; //컬렉션(table)을 가르키는 변수

MongoClient.connect(url,(err,client)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Mongo Conn node");
        db=client.db(dbname);
        //db 생성
        login=client.collection('login');    
        //table 생성    
    }
})


app.use(bodyparser.urlencoded({
    extended:false
}))


app.listen(2000,(req,res)=>{
    console.log('sever conn');
})