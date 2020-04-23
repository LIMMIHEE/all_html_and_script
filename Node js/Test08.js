const users = [
    {name:'kim',age:20},
    {name:'lee',age:30},
    {name:'park',age:40}
]
/* 
console.log(`${users.length}`);
users.push({name:'kang', age:15});

users.pop();
users.forEach(function (value,index) {
    console.log(value,index);
    
});


users.unshift({name:'ko',age:25});
users.forEach(function (value,index) {
    console.log(value,index);
    
});
users.shift();
users.forEach(function (value,index) {
    console.log(value,index);
    
});
users.push(function pr() {
    return 'hello nodejs';
});
console.log(users[3]());

*/


//3.delete
/*
delete users[1];
console.dir(users);

users.forEach(function (value,index) {
    console.log(value.name+", "+index);
    
});
*/

//4.splice(index, removeCount, [Object])
/*
users.splice(1,0 ,{name:'seo', age:35});
console.dir(users);

//index:2 삭제
users.splice(2,1);
*/


//5.Slice
/*
//users2라는 추가배열을 만드는데 index 1번 부터 1개 요소로 들어간다.
const users2 = users.slice(1,2); 
// 2 자리의 값은(n-1)만큼 추가
console.log(users2);
console.log(users);

*/

function add(x,y){
    console.log(x+y);
}