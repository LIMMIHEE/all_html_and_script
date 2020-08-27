const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');
var moment = require('moment'); 
require('moment-timezone'); 
moment.tz.setDefault("Asia/Seoul"); 
var date = moment().format('YYYY-MM-DD HH:MM:SS');

app.set("views","./views");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({
    extended:false
}))

//mysql 연결
//list 라우팅
//정보들 수정
// 내림차순으로 표시

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'test'
})
conn.connect();
if(conn) console.log('DB 연결');
else console.log('DB 연결실패');

let sql={
    list : 'select * from join_t order by id desc',
    edit : 'select * from join_t where id=?',
    update : 'update join_t set user_id=?,password=?,username=?,email=?,tel=?,regDate=? where id=?',
    delete : 'delete from join_t where id=?',
    insert : 'insert into join_t (user_id,password,username,email,tel,regDate) values(?,?,?,?,?,?);'
}


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/list',(req,res)=>{
    conn.query(sql.list,(err,rows)=>{
        if(err){console.log(err); return;}
        res.render('list',{docs:rows});
    })
})
app.get('/edit/:id',(req,res)=>{
    const _id = req.params.id;
    conn.query(sql.edit,[_id],(err,rows)=>{
        if(err){console.log(err); return;}
        res.render('editer',{docs:rows[0], id:_id});
    })
})
app.post('/edit/:id',(req,res)=>{
    const _docs = req.body;
    conn.query(sql.update,[_docs.user_id,_docs.password,_docs.username,_docs.email,_docs.tel,_docs.regDate,req.params.id],(err)=>{
        if(err){console.log(err); return;}
        res.redirect('/list');
    })
})
app.post('/delete/:id',(req,res)=>{
    const _id = req.params.id;
    conn.query(sql.delete,[_id],(err,rows)=>{
        if(err){console.log(err); return;}
        res.redirect('/list');
    })
})
app.get('/SignUp',(req,res)=>{
    res.render('signUp')
})
app.post('/SignUp',(req,res)=>{
    const _docs = req.body;
    conn.query(sql.insert,[_docs.user_id,_docs.password,_docs.username,_docs.email,_docs.tel,date],(err,rows)=>{
        if(err){console.log(err); return;}
        res.redirect('/list');
    })
})

app.listen(3000,(req,res)=>{
    console.log('server open');
})