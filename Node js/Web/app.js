const express = require('express');
const fs = require('fs');
const app = express();

app.locals.pretty=true;

app.set("Views","./Views"); // 나는 뷰 사용할거고 내용은 ./Views에 있어
app.set("view engine",'pug'); // 엔진으로는 퍼그 사용할거야
// 그담에 퍼그 설치 

app.get('/sss',(req,res)=>{
    fs.readdir('./data',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send('디렉토리 읽어옴')
        console.log(result);
    })
})

app.get('/sss/new',(req,res)=>{
    res.render('new');
    //퍼그는 render 사용한다.
});
app.post('/sss/new',(req,res)=>{
    
    //req.body.title
})
app.listen(3000,(req,res)=>{
    console.log("running express server at localhost....");
    
});

