const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const multer = require('multer');
const upload = multer({dest:'./uploads'});


app.use(bodyparser.urlencoded({
    extended:false
}))

app.set('View','./Views');
app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.send('File Upload');
})

app.get('/Upload',(req,res)=>{

    res.render('new');
})
app.post('/Upload',upload.single('file_Up'),(req,res)=>{
    res.send(req.file);
})




app.listen('3000',(req,res)=>{
    console.log('server conn');
})