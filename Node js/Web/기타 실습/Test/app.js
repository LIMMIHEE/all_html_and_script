const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const fs = require('fs');



app.use(bodyparser.urlencoded({
    extended:false
}))

app.set("View","./Views");
app.set("view engine",'pug');
app.locals.pretty = true;

app.get('/subject',(req,res)=>{
    fs.readdir('./data',(err,files)=>{
        if(err){
            console.log(err);
        }else{
            res.render('view',{
                docs:files
            });
        }
        
    })
})


app.get('/subject/new',(req,res)=>{
    res.render('new');
})
app.post('/subject/new',(req,res)=>{
    //title, desc 값 가져와서 _title,, _desc 대입
   
    // conat _title =`${req.body.title}`;
    // const _desc =`${req.body.desc}`;

    //const out = `${req.body.title} 과 ${req.body.desc}가 들어왔다.`

    // const data = {
    //     _title : req.body.title,
    //     _desc : req.body.desc
    // }
    //JSON으로 가져오는 법

    const a = req.body;
    const _title = a.title;
    const _desc = a.desc;

    // res.send(data._title +', '+data._desc);

    fs.writeFile('./data/'+_title,_desc,(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('정상적으로 등록되었습니다');
        res.redirect('/subject');
        //리다이렉션 시키는법
    })

})
app.get('/subject/:id',(req,res)=>{
    // 1. id값 가져오기
    // 2. 내용 읽어오기
    // 3. 렌더 시키기, ( 이때 결과 값을 념겨서 변수로 출력하기 )

    //1.
    const id = req.params.id;
    //2.
    fs.readdir('./data',(err,files)=>{
        if(err){
            console.log(err);
        }else{
            fs.readFile('./data/'+id,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('정상적으로 읽어옴');
                    //3.
                    res.render('new',{
                        docs:files,
                        title:id,
                        content:data
                    })
                }
                
            })
        }
        
    })

})


app.listen(3000,(req,res)=>{
    console.log('server conn');
})



