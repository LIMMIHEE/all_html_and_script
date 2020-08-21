const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');

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
    update : 'update todo set user_id=?,password=?,username=?,email=?,tel=?,regDate=? where id=?'

}


app.get('/',(req,res)=>{
    res.send('Hi Join');
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
        res.render('editer',{docs:rows, id:_id});
    })
})
app.post('/edit/:id',(req,res)=>{
    const _docs = req.params;
    conn.query(sql.update,[_docs.user_id,_docs.password,_docs.username,_docs.email,_docs.tel,_docs.regDate,_docs.id],(err)=>{
        if(err){console.log(err); return;}
        res.redirect('/list');
    })
})



app.listen(3000,(req,res)=>{
    console.log('server open');
})