const express = require('express');
const app = express();


app.set("Views","./Views"); // 나는 뷰 사용할거고 내용은 ./Views에 있어
app.set("view engine",'pug'); // 엔진으로는 퍼그 사용할거야
// 그담에 퍼그 설치 



app.get('/',(req,res)=>{
    res.render('new');
    //퍼그는 render 사용한다.
});

app.get('/sss/new',(req,res)=>{
    res.send('<h1> hello world ss </h1>');
});
app.listen(3000,(req,res)=>{
    console.log("running express server at localhost....");
    
});

