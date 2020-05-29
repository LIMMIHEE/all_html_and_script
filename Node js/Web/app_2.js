const express = require('express');
const app = express();



let time = Date();



app.locals.pretty = true;

app.set("Views","./Views"); // 나는 뷰 사용할거고 내용은 ./Views에 있어
app.set("view engine",'pug'); // 엔진으로는 퍼그 사용할거야
// 그담에 퍼그 설치 


app.get('/',(req,res)=>{
    res.render('test', {_time:time});
});


app.listen(3000,(req,res)=>{
    console.log("running express server at localhost....");
    
});

