//eventEmitter를 상속받는다.
//process 객체는 기본적으로 eventmitter를 상속받는다,.
//1. 기존의 있는 이벤트 사용 (exit)
//const event = require('eventemitter');
process.on('exit',(code)=>{
    console.log('bye nodejs');
    console.log(code);
})

console.log('실행중');
/*************************************** */
//2. 'tick' 이라는 내 마음대로의 이벤트를 만든다.
//이벤트 이미터를 가지고 온다.
const EventEmitter = require('events');

//eventemitter 객체 생성
const customEmitter = new EventEmitter();

customEmitter.on('tick',()=>{
    console.log("tick 이벤트 발생함");
})


customEmitter.emit('tick'); //이벤트 발생 기키기