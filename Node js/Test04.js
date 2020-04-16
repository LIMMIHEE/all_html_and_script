//1.
/* 
var arr=new Array();
var arr = [1,2,3,4,5]; //배열

const grades={
    'kim':10,
    'lee':30,
    'Park':50
} 
//객체 만들며 초기화 시키기
//JSON은  {} 괄호
//이름이 grades하는 객체. 객체는 {}로 시작.
//key - value로 데이터 입력
//Key는 따옴표 안해도, ''으로 해도, ""으로 해도 상관없음.

console.log('grades.lee',grades.lee);
console.log(grades.lee);
console.log(grades['lee']);

console.dir(grades)
*/
//console.dir은 구조를 알려준다.


// //2.
// const grades  = {}; //const grades = new Object();
// //위의 두 문장은 같은 문장. 쓰는 방식만 다를 뿐
// grades.lee = 10;
// grades.kim = 30;
// grades.park = 50;
// grades['name']="이씨 박씨 김씨";
// console.log(grades.park);
// console.log(grades.name);


// //3. 생성자 함수 이용
// //생성자 함수 : 객체를 만들면서 동시에 값을 넣어주는 것.
// //보통 생성자 함수는 맨 앞을 대문자로 씀.
// function Grades(name,score){
//     this.name=name;
//     this.score=score;
// }

// Grades('kim',10);//함수 호출

// const kim= new Grades('kim',10); //객체 생성
// const lee= new Grades('lee',50);

const grades4={
    list:{name:'kim', age:30,height:180},
    show:function () {
        console.log('hello javascript!');
        
    }
}
console.log(grades4.list);
console.log(grades4.list.name);
grades4.show(); 
//show는 함수이기 때문에 괄호 붙여줘야함.
//grades4['show']();

const grades5={
    list:{name:'kim', age:30,height:180},
    show:function () {
        // for(var item in list){ // for -in문
        //     //console.log(list[item]); // 이러면 키가 들어감.
        //     console.log(list[item]); 
        // }
        for(var Key in this.list){ // for -in문 Key=name, Key=age, key = height
            console.log(this.list[Key]); 
        }
    }
}
grades5.show();