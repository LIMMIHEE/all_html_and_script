const users=[
    {name:'kim', age:30},
    {name:'lee', age:20},
    {name:'park', age:10}
]

console.log(`배열의 갯수 : ${users.length}`);

users[3] = {name:'ko',age:50};
users.push({name:'test',age:0});

console.log(`${users[3].name}`);

users.pop();
console.log(`배열의 갯수 : ${users.length}`);

// 함수도 값이다. 그러므로 변수에 대입이 가능하다.

var add=function (x,y) {
    return (x+y);
}
users.push(add);
console.log(`배열의 갯수 : ${users.length}`);
console.log(users);
console.dir(users);

console.log(users[4](5,6));
// 함수 접근 방법
//user[4] 자체가 add가 되기 때문에 위와 같이 써야한다.