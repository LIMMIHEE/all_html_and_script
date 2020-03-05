/*
var name="global var";

function home(){
    var homevar = "homevar";
    for(let i=0; i<100; i++){
        console.log(i);
    }
    //let 을 쓰면 괄호 안에서만 ? 사용할 수 있다.
    if(true){
        let myif = "myif";
    }
    console.log(myif);
}

home();
 */

// let ( 1강 )
//////////////////////////////////////////////////
/*
var list = document.querySelectorAll("li");
for(let i=0; i<list.length;i++){
    list[i].addEventListener("click",function(){
        console.log(i + "번째 리스트 입니다.")
    })
    //콜백은 나중에 실행되는 거임.
    //i는 콜백 밖에 있는 값을 계속 참조하면서 기억하고 있기때문에 걔속 4라 뜨는거,

}
*/
// let과 closure ( 2강 )
//////////////////////////////////////////////////

/*
function home(){
    //평균적으로 대문자로 이름을 해놓으면 상수라는 표시를 해둔것이다. ( 예전에는 )
    //var homename = 'my house';
    const homename = 'my house';
    const name = [1,2,3,4,5];
    name=[6,7];
  //  homename = "your hoyse";
    console.log(homename);

    //const를 기본으로 사용한다. 그런데 변경이 될 수 있는 변수는 let을 사용.
    //var는 사용하지 않는다.
}

home();
 */
// 3강
//////////////////////////////////////////////////

/*
function home(){
    const list = ["apple","orange","watermelon"];
    list.push("banana");
    //const 라고 수정할 수 없는 건 아니다! 추가도 가능하다!
    console.log(list);
}
//immutable array 는 어떻게 만들까?
//뒤로 가기, 앞으로 가기.
const list = ["apple","orange","watermelon"];
list2 = [].concat(list,"banana");
console.log("2:"+list2);
console.log(list==list2);
home();

 */
//4강
//////////////////////////////////////////////////

/*

let str="hello world! ^^*~~";
//hello로 시작하는 지 안하는 지 알려면 어떤 걸 해야할까?
let matcher = "hello";
console.log(str.startsWith(matcher));//시작이 일치하는지
console.log(str.endsWith(matcher));// 끝이 일치하는지
console.log(str.includes("world"));//해당 글자가 들어있느냐
 */
//5강
//////////////////////////////////////////////////

/*
var data = [1,2,undefined, NaN, null,""];
data.forEach(function(value){
    console.log("V:"+value);
})
Array.prototype.getIndex = function () {};
for(let value in data){
    console.log(data[value]);
}
for(let value of data){
    console.log(value);
}

var str = "hello world!!!!";
for(let value of str){
    console.log(value);
}

*/
//6강
//////////////////////////////////////////////////


/*
//spread operator , 펼침 연산자

let pre = ["apple","orange",100];
let newData = [...pre];
// []는 배열을 뜻함 , ...pre는 펼침을 뜻함? * 점 3개 필수+펼칠 배열 이름
console.log(pre,newData);
//console.log(pre===newData); 참조가 같냐고 불러보는 기호 ===
*/
//7강

//////////////////////////////////////////////////

/*
let pre = [100,200,"hello",null];
let newData = [0,1,2,3,...pre,4];

console.log(newData);

function sum(a,b,c){
    return a+b+c;
}
let Pn = [100,200,300];
console.log(sum.apply(null, Pn)); // apply 는 두번째를 널로 받음
console.log("result -> "+sum(...Pn));
*/
//8강

//////////////////////////////////////////////////


//ES2015 from method
function addMark(){
    //let newData= [];
    /*
    for(let i=0; i<arguments.length; i++){ //arguments = 객체
        newData.push(arguments[i]+"!");
    }
    */
   let newArray = Array.from(arguments);
   //let newData=arguments.map(function(value){ //arguments는 배열이 아니기 때문에 map 사용불가. 근데 모양은 배열임 ( 가짜배열 )
        // 가짜를 진짜로 만드는 방법 
    let newData=newArray.map(function(value){
       return value+"!";
   });
    console.log(newData);

}
addMark(1,2,3,4,5);



