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
    list : 'select * from infolist order by id desc',
    info : 'select * from infolist where id=?',
    insert : 'insert into infolist (name,email,tel) values(?,?,?);'
}



app.get('/contacts',(req,res)=>{
    conn.query(sql.list,[],(err,row)=>{
        if(err) console.log(err);
        else res.render('list',{docs:row})
    })
})
app.get('/new',(req,res)=>{
    res.render('new');
})
app.post('/new',(req,res)=>{
    const _data = req.body
    conn.query(sql.insert,[_data.name,_data.email,_data.tel],(err)=>{
        if(err) console.log(err);
        else res.redirect('contacts')
    })
})
app.get('/info/:id',(req,res)=>{
    const _data = req.params.id
    conn.query(sql.info,[_data],(err,rows)=>{
        if(err) console.log(err);
        else res.render('info',{docs:rows})
    })
})




app.listen(3000,(req,res)=>{
    console.log('server conn');
})