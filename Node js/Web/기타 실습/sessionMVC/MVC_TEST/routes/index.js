const express = require('express')
const router = express.Router()


router.get('/welcome',(req,res)=>{
    res.send('hi welcome')
})
router.get('/temp',(req,res)=>{
    res.send('hi temp')
})
router.get('/login',(req,res)=>{
    res.send('hi login')
})

//모듈 내보내기
module.exports = router