//1. forEach()*: array 객체에 있는 함수
const fruits = ['apple','banana','grape'];
fruits.forEach(function (indesx, Value) { 
    console.log(indesx,Value);
    
});

//------------------------------------------------
//1.for -in
const obj = {
    name:'kim',
    age:20,
    height:170
}
//in 뒤의 객체에서 키값이 차례대로 name에 들어간다.
for (let name in obj) {
    console.log('key:'+name+', value');
}
//name:name, name:age, name:height
for (let name in obj) {
    console.log('key:'+name+', value '+obj[name]);
}

//------------------------------------------------
//3. for -of
let arr=[10,20,30];
for(let value of arr){
    console.log(value);//1. of 뒤 객체에서 value 값이 차례대로 들어간다.
}

let str = 'foo';
for(let value of str){ //string도 객체이다.
    console.log(value);
}