const fs = require('fs');


//동기식 ( 차례차례 실행됨 )
// console.log('A');
// console.log('B');
// console.log('C');


/******************************************* */

// console.log('A');
// setTimeout(()=>{console.log('B')},2000); 
// //2초 후에 실행해라, 비동기식
// console.log('C');

// 실행 순서 A  C  B 임.
// 순서가 이렇게 되는건 비동기 식이라 얘 실행해라! 하고
// 바로 아래로 가기 때문에 C 가 먼저 나오고 B가 찍히는거.

/******************************************* */


console.log('A');
const content = fs.readFileSync('./data.txt');
//동기식 함수. ( 콜백 없음 )
console.log(content.toString());
//toString 안하면 버터값이 나오기 때문에 toString 해야한다.
console.log('B')
// A content 구조? B



console.log('A');
fs.readFile('./data.txt',(err,result)=>{
    if(err){console.log(err); return;    }
    console.log(result);
    console.log('B');
    
})
//비동기식 함수. 
console.log('C');