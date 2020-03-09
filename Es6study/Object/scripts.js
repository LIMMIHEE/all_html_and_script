/*
// function Health(name){
//     this.name -= name;
// }
// Health.prototype.showHealth = function(){
//     console.log(this.name + " Hi welcome");
    
// }

// const h = new Health("BAd");
// h.showHealth();

class Health{
    constructor(name, lastTime){
        this.name=name;
        this.lastTime=lastTime;
    }
    showHealth(){
        console.log("welcome "+ this.name);
        
    }
}
const myHealth = new Health("BABA");
myHealth.showHealth();
console.log(toString.call(myHealth)); // 클래스가 아님!
*/
//class를 통한 객체 생성
///////////////////////////////////////////////////

/*
var healthObj = {
    showHealth : function (){
        console.log("오늘의 운동시간 : "+this.healthTime);
        
    }
}
// const myHealth = Object.create(healthObj);
// myHealth.healthTime = "11:20";
// myHealth.name = "BABA";
const myHealth = Object.assign(Object.create(healthObj),{
name:"BABA",
lastTime : "11:20"
});


console.log("myHealth is", myHealth);

*/

//Object assign으로 JS객체 만들기
///////////////////////////////////////////////////

/*
const previousObj = {
    name:"BABA",
    lastTime: "11:20"
};
const myHealth = Object.assign({},previousObj,{
    "BABA": "11:20",
    "name" : "honux",
    "age":99

 });

 console.log(previousObj=== myHealth);//완전히 같느냐
 */
//Object assign으로 Immutable 객체 만들기
///////////////////////////////////////////////////

/*
var healthObj = {
    showHealth : function (){
        console.log("오늘의 운동시간 : "+this.healthTime);
        
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
}

// const myHealth = {
//     name:"BABA",
//     lastTime : "11:20"
// };
// Object.setPrototypeOf({
//      name:"BABA",
//      lastTime : "11:20"
// },healthObj);  

const newobj = Object.setPrototypeOf( {
    name:"BABA",
   lastTime : "11:20"
 },healthObj);

// console.log("myHealth is", myHealth);
console.log("newobb is"+ newobj);
console.log(newobj);
*/
//Object setPrototypeof로 객체 만들기
///////////////////////////////////////////////////

var healthObj = {
    showHealth : function (){
        console.log("오늘의 운동시간 : "+this.healthTime);
        
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
}

const healthChildObj={
    getAge: function(){
        return this.age;
    }
}
Object.setPrototypeOf(healthChildObj,healthObj);

const childObj = Object.setPrototypeOf({
    age:22 
}, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();
//console.log("healthChildObj is "+childObj);


//Object setPrototypeof로 객체간 prototype chain 만들기
///////////////////////////////////////////////////
