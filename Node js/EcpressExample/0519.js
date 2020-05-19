
/*
const car = {
    'car_name' : 'BMW',
    'car_owner' : 'jun',
    'car_color' : 'green',
    'car_price' : 10000000,
    speedUp : ()=>{
        console.log("속도가 놀라갑니다");
    },
    speedDown : ()=>{
        console.log("속도가 내려갑니다");
    }
}
car.car_name = 'J';
car.car_owner = 'Panne';
car.car_color = 'Yellow';
car['car_price'] = 909090;

*/




/* 
const car = new Object();
car.car_name = 'BMW';
car.car_owner = 'jun';
car.car_color = 'green';
car.car_price = 30000000;
car.speedUp = function () {
    console.log("속도가 놀라갑니다");
}
car.speedDown = function () {
    console.log("속도가 내려갑니다");
}

*/
/*
function car(name , owner,color,price){
    this.car_name = name;
    this.car_owner = owner;
    this.car_color=color;
    this.car_price = price;

    this.speedUp = ()=>{
        console.log("속도가 놀라갑니다");
    }
    this.speedDown = ()=>{
        console.log("속도가 내려갑니다");
    }
}

const car2 = new car('BMW','Jake','red','900000');
console.log(car2.s);


*
/*
const animal = {
    'dog' : '월월',
    'cat' : '냥냥',
    'Hamster' : '찍찍'
}
for (let num in animal) {
    console.log('key:'+num +', value'+animal[num]);
}
*/
/* 
var animal = [
    'dog', '월월',
    'cat' , '냥냥',
    'Hamster' , '찍찍'
]
animal.forEach(element => {
    console.log(element);
});


for(let value of animal){
    console.log(value);//1. of 뒤 객체에서 value 값이 차례대로 들어간다.
}
*/

/*
const sum = (x,y)=>{
    return x+y;
}
const imsum = (x,y)=>{
    return x-y;
}
const product = (x,y)=>{
    return x*y;
}
const quotient = (x,y)=>{
    return x/y;
}

sum(19,4);   imsum(19,4);  product(19,4);  quotient(19,4);
*/

/*
function callBack(num){
    num();
}
function name() {
    console.log("이름은 뭘까?");
    callBack(()=>{console.log("꾸시!");});
}

name();
*/
/* 
function one() { console.log('one'); two(); } 
function two() { console.log('two'); Three(); } 
function Three() { console.log('Three'); }

one();
*/

function one() { console.log('one'); two(); } 
function two() { setTimeout(()=>{console.log('two');},0);  Three(); } 
function Three() { console.log('Three'); }

one();
