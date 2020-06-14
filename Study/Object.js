var num1 = {
    name : 'kim',
    age : 15,
    num:[
        1,
        2,
        3
    ]
};

console.log(num1.age);
console.log(num1.name);
num1.num.forEach(element => {
    console.log(element);
});


var num = new Object;
num.name="kim";
// num.age=20;
num['age']=20;

console.log(num.age);
console.log(num.name);

function name2(name,age){
    this.id =name;
    this.num = age;
}
var User = new name2("mirim",3331);
console.log(User.id);
console.log(User.num);

User.print = ()=>{
    console.log(this.num+10);  
};

User.print();