const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const IndexRouter = require('./routes/index')

app.set("views","./views")
app.set("view engine","ejs")

app.use('/', IndexRouter)
app.use(bodyParser.urlencoded({
    extended : false   
}))

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'test'
})

conn.connect();
if(conn) console.log('DB연결');
else console.log('DB 연결 실패');

let sql = {
    list : 'select * from board '
}



app.listen(3000,(req,res)=>{
    console.log('server conn');
})