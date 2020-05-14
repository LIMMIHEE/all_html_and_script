const http = require('http');
const server = http.createServer();
server.on('connection', ()=>{
    console.log("connection 발생");
})
server.on('request', (req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1> HELLLLLLLLLO</h1>');
    console.log("request 발생");
})
server.listen(5353,()=>{
    console.log("서버 실행");
})