const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');
const app = express();

app.locals.pretty=true;

app.set("Views","./Views"); // 나는 뷰 사용할거고 내용은 ./Views에 있어
app.set("view engine",'pug'); // 엔진으로는 퍼그 사용할거야
// 그담에 퍼그 설치 
app.use(bodyparser.urlencoded({
    extended:false // 키 벨류 형식으로 인코딩 시킨다?? 나중에 함 찾아봐야 하는 듯
}))




app.get('/sss/:id',(req,res)=>{
    var id = req.params.id;
    fs.readdir('./data',(err,result)=>{
        let out='';
        
        if(err){
            console.log(err);
            return;
        }
        fs.readFile('./data/'+id,'utf8',(err,data)=>{
            console.log(data);
            //out += data + '\n';
            res.render('view',{})
        })

        //res.render('new');
        res.send(out);
        
        console.log(result);
    })
})
app.post('/sss',(req,res)=>{
    
    res.render('new');
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

