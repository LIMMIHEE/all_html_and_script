
console.log(true || 30); // 앞의 값이 참이면 앞의 값을 반환 ( or )
console.log(true && 30); // 앞의 값이 참이면 뒤의 값을 반환 ( and )

console.log();


console.log(100=="100"); // 값만 비교한다. ( 자동으로 형변환 )
console.log(100==="100"); // 데이터 타입까지 같아야함


console.log(null ==undefined); 
//true
console.log(null===undefined);
//false
//null의 타입은 Object여도 값은 undefined이고
//undefined는 값도 타입도 undefined

//req.body <- post 타입으로 넘어오는 값 가져오는
//req.params <- /:으로 넘어오는 값 
//req.qurey <- ?인 쿼리 스트링으로 넘어오는 값

// const arr = [0,1,2,3,4,5,6,7,8,9,10];

// arr.forEach(index,function(element){
//     console.log(element); // 0 1 2 3 4 5 6 7 8 9 10
// });

const person={
    list:{
        'kim':30,
        'lee':25,
        'park':10
    },
    show:function(){
        console.log(person.list['kim'] );
        console.log(person.list['lee']);
        console.log(person.list['park']);
    } 
}
person.show();


list = [1,2,3];
for(item of list){
    console.log(item);
}