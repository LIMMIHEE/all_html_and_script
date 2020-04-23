
/*
// 함수작성 방법
//.1
function add(x,y){
    console.log(x+y);
}

//함수는 값이므로 변수에 대입 할 수 있다.
add(10,20);

//2.
let add = function(x,y){
    return x+y;
}

//3.
//ES6:arrow  funtion으로 바뀜
let add2= (x,y)=>{
    return x+y;
}

//4.
let add3 = (x,y) => (x,y);
*/

//arrow  funtion으로 만들어보기
let add = (x,y)=> {
    return x+y;
};
let add2 = (x,y)=> (x+y);
console.log(add(4,3));
console.log(add2(4,3));
