/*
//arrow function

// setTimeout(function(){
//     console.log("settimeout");
// },1000);

setTimeout(()=>{
    console.log("settimeout arrow");
},1000); // 축약 표현 값

// let newArr = [1,2,3,4,5].map(function(value, index, object){
//     return value*2;
// });
// console.log(newArr);
// let newArr = [1,2,3,4,5].map((v)=>{
//     return v*2;
// });      <- 1차 축약
let newArr = [1,2,3,4,5].map((v)=> v*2);    //2차 축약
console.log("arrow newArr",newArr);


*/
//Arrow funtion. 활용
/////////////////////////////////////////////////////////

/*
// const mtObj = {
//     runTimeout(){
//         setTimeout(()=>{
//             console.log(this == window);
//             this.printData();
//         },200);
//     },
//     printData(){
//         console.log("hi codesqued!");
        
//     }
// }
// 

const el = document.querySelector('p');

const MyObj = {
    register(){
        el.addEventListener("click",(evt)=>{
            this.printData(evt.target);
        });
    },
    printData(){
        console.log("clicked!!!!!", el.innerText);
        
    }
}
MyObj.register();
*/

//Arrow funtiondml this context
/////////////////////////////////////////////////////////

/*
function sum(value,size={value=1}){//디폴트 파라미터,   없으면 1로 넣는거임.
    // size=size || 1;
    return value*size.value;
}
console.log(sum(3,{value:3}));// 3넘기기
*/
//function default paramaters
/////////////////////////////////////////////////////////



function checkNum(...argArray){
    //n개의 매개변수 어쩌구.. 대충 정해진 만큼아니라 들어오는 양 상관없이 사용하는 그런거임

    //const  argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(argArray)); 
    const result = argArray.every((v)=> typeof v ==="number");
    console.log(result);
}
const result = checkNum(10,2,3,4,5,"55");


//rest parameters
