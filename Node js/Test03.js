//1.
// var vscope = 'global';
// function fscope() {
//     var vscope = 'local';
// }
// console.log(` ${vscope}`);

//2.
// var vscope = 'global';
// function fscope() {
//     var vscope = 'local';
//     console.log(vscope);
// }
// fscope(); //local
// console.log(`${vscope}`); // global;

//3.
// var vscope = 'global';
// function fscope() {
//     vscope = 'local'; //var 없이 선언했을 때는 전역 변수로 됨.
//     console.log(vscope);
// }
// fscope(); // local
// console.log(vscope); //local


//num=23일때 홀수인지 짝수인지 판별
// let num =23;
// if(num%2==0){
//     console.log("짝수입니다.");
// }else{
//     console.log("홀수입니다.");
    
// }

//1부터 100까지의 정수 중에 4의배수만
// for(let i=1; i<=100; i++){
//     if(i%4==0){
//         console.log(i);
//     }
// }

//100~999 사이에ㅐ 7의 배수인 수들의 갯수와 합
// var j=0;
// var num=0;
// for(let i=100; i<=999; i++){
//     if(i%7==0){
//         num+=i;
//         j++;
//     }
// }
// console.log("7의 배수 갯수와 합 :: " +num +" "+j);

//100~999 사이에ㅐ 4의 배수가 아닌 수들의 갯수와 합
// var j=0;
// var num=0;
// for(let i=100; i<=999; i++){
//     if(i%4!=0){
//         num+=i;
//         j++;
//     }
// }
// console.log("4의 배수가 아닌 갯수와 합 :: " +num +" "+j);

//1부터 30까지의 짝수와 홀수의 합을 구하게요
// let num=0;
// let j=0;
// for(let i=1; i<=30; i++){
//     if(i%2==0){
//         num+=i;
//     }else{
//         j+=i;
//     }
// }
// console.log("짝수의 합 : "+num + "  홀수의 합 : "+j);



//오늘의 요일 출력
// let today = new Date();   
// let day = today.getDay();
// switch (day) {
//     case 1: console.log("월요일");
//      break;
//     case 2:console.log("화요일");break;
//     case 3:console.log("수요일"); break;
//     case 4:console.log("목요일"); break;
//     case 5:console.log("금요일"); break;
//     case 6:console.log("토요일"); break;
//     case 7:console.log("일요일"); break;
//     default: console.log("몰라");
//         break;
// }