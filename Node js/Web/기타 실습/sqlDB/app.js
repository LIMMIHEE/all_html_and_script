const express=require('express');
const app=express();
const ejs = require('ejs');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const format = require('data-format');
var moment = require('moment'); 
require('moment-timezone'); 
moment.tz.setDefault("Asia/Seoul"); 
var date = moment().format('YYYY-MM-DD HH:MM:SS');


const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'test'
})
conn.connect();
if(conn) {
    console.log('mysqp db 연결됨');
}
else{
    console.log('mysql db 연결실패!!')
}
app.set("views","./views");
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({
    extended : false
}))
let sql={
    insert:'insert into todo (content,wdate) values(?,?);',
    list:'select * from todo order by id desc',
    update:'update todo set content=? where id=?',
    delete:'delete from todo where id=?'
}
app.get('/',(req,res)=>{
    res.send('hi todo');
})
app.get('/todo',(req,res)=>{
    conn.query(sql.list,(err,rows)=>{
        if(err){console.log(err); return;}
        res.render('index',{docs:rows});
    })
    //res.render('index',{title:'TODO LIST'});
})
app.post('/todo',(req,res)=>{
    const _content=req.body.content;
    conn.query(sql.insert,[_content,date],(err)=>{
        if(err){console.log(err); return;}
        console.log('Inserted!!');
        res.redirect('/');
    })
    //query
})
app.post('/delete/:id',(req,res)=>{
    const _content=req.params.id;
    conn.query(sql.delete,[_content],(err)=>{
        if(err){console.log(err); return;}
        console.log('Deleted!!');
        res.redirect('/todo');
    })
})



app.listen(3000,()=>{
    console.log('running...');
})