const express = require('express');
const app = express();
const port = 303;
const hostname = 'localhost'

app.get('/root',(req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html;charset:utf8'});
    res.write('<h1>hello exress</h1>');
    res.end();
    // or res.send('hello exress');
})
app.listen(port,hostname,()=>{
    // console.log('hello exress');
    console.log(`connected express server at ${hostname} /: ${port}`);
    
})
