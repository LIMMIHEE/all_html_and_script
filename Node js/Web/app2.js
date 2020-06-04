const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const list = [
    'node is///',
    'npm is...',
    'Express is,,,'
]


app.use(bodyparser.urlencoded({
    extended:false // 키 벨류 형식으로 인코딩 시킨다?? 나중에 함 찾아봐야 하는 듯
}))

app.get('/',(req,res)=>{
    res.send('Hellp node');
})

app.get('/list',(req,res)=>{
    // res.send('<a href='+`${list[0]}`+'>node js</a> <br>' + 
    // '<a href='+`${list[1]}`+'>npm</a> <br>'+
    // '<a href='+`${list[2]}`+'>Express</a>');
    // 내가 쓴거


    const output = 
    `<a href="/list?id=0">node js</a> <br>
    <a href="/list?id=1">npm</a> <br>
    <a href="/list?id=2" >Express</a> <br><br><br>
    
    
    <span>${list[req.query.id]}</span>`;

    res.send(output);
    //선생님이 쓴거

})
//list로 라우팅 했을 때 node js , npm , express로 하이퍼링크 걸기



//1. get 방식 데이터 가져오기 (req.quary.이름)
app.get('/test',(req,res)=>{ // 요청이니까 req.qeury.name
    //넘어온 데이터 출력시키기
    //http://localhost:2000/test?name=kim&password=30

    const out =`이름은 ${req.query.name}<br> 비밀번호는 ${req.query.password}입니다`;

    res.send(out);

})


//2. get('/test/:id') 방식
app.get('/test/:id',(req,res)=>{
    //id 출력 시키기
    //http://localhost:2000/test/lee
    //여기서 id는 lee
    const out = `id는 ${req.params.id}입니다.`

    res.send(out);
})

//3. post , req.body.이름
//post는 폼 필요
app.get('/test2',(req,res)=>{
     const out = `
     <form method="post" action="/test2">
        <p>아이디</p> 
        <input type="text" placeholder="아이디" name="uid">
        <p>비밀번호</p>
        <input type="text" placeholder="비밀번호" name ="upass">
        <input type="submit" value="login">
     </form>`
     //값은 post 형식으로 넘어감 ( form이 글케 됫으니까 )

     res.send(out);
})
// 라우팅 이름은 같지만 형식이 다르므로 OK
app.post('/test2',(req,res)=>{
    //여기서 uid를 찾지 못겠다고 함. form에서 입력한 
    // 미들웨어 필요 ( 인코딩 해주는 ) : body-parser

    const out =` 입력하신 아이디는 ${req.body.uid} 비밀번호는  ${req.body.upass}입니다`;
    res.send(out);
})


app.listen(2000,(req,res)=>{
    console.log('server con');
    
})