//1번째 방법
// //http 모듈을 가져와서 http상수에 대입시키기.
// const http = require('http');

// //server 객체를 생성
// const server = http.createServer();

// // 서버 실행
// //listen(포트번호, 콜백함수)
// server.listen(5252,()=>{
//     console.log('Running Web Server at localhost');
// });





//2번째 방법
//request, connection 이벤트 활용( 응답이 없음 )
// const http = require('http');
// const server = http.createServer();
// server.on('request',()=>{
//     console.log('request 이벤트 발생')
// })
// server.on('connection',()=>{
//     console.log('connection 이벤트 발생');
// })

// server.listen(5252,()=>{
//         console.log('Running Web localhost');
// });
    

//3번째
//request요청이 왔을 때 이벤트 핸들러의 매개변수로 '요청'과 '응답'을 주어야한다.
const http = require('http');
const server = http.createServer();
//req : 요청, res : 응답
server.on('request', (req, res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.write('<h1>hello nodejs</h1>');
    res.end();
})
server.listen(5252,()=>{
            console.log('Running Web localhost');
});

//request 요청이 들어왔을 때 응답을 보대눠야 한다.
// 그게 바로 funtion(req, res)이다. <-- 이벤트 핸들러이다.


/******************************************** */
// //4.우리가 실제 사용하는 웹서버 -> 3번이 우리가 사용하는 웹서버로 알고있으라 하심.
// const http = require('http');
// const server = http.createServer();
// server.