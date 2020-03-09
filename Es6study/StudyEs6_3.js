/*
let myset = new Set();
console.log(toString.call(myset));

//set : 중복 없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할때 유용.

myset.add("crong");
myset.add("ba");
myset.add("Bi");

console.log(myset.has("ba"));

myset.delete("ba");

myset.forEach(function (v) {
    console.log(v);
})
*/

//17

/////////////////////////////////////////////////////////////////////////

/*
//weakset : 참조를 가지고 있는 객체만 저장이 가능하다.
//객체 형태를 중복없이 저장하려고 할때 유용하다.


let arr = [1,2,3,4];
let wa =  new WeakSet ();
let arr2 = [5,6,7,8];
let obj = {arr,arr2};
wa.add(arr);
wa.add(arr2);
wa.add(obj);

arr = null;
arr2 = null;
// wa.add(111);
// wa.add("111");
// wa.add(null);

console.log(wa);
console.log(wa.has(arr), wa.has(arr2));


*/

//17

/////////////////////////////////////////////////////////////////////////


/*
//map & WeakMap
//Array  개선 한게 set, weakset 
//object 개선 한게 map. waekmap

//map은 key / value
let wm = new WeakMap();
let myFun = function () {    };
//이 함수가 얼마나 실행된건지 를 알려고 할깨.

wm.set(myFun,0);

console.log(wm);

for (let i=0; i<10; i++){
    count = wm.get(myFun); // 값을 뽑는거
    count ++;
    wm.set(myFun,count);
}
console.log( wm.get(myFun));
myFun = null;
console.log( wm.has(myFun));

*/

//17

/////////////////////////////////////////////////////////////////////////

/*
//WeakMap 활용
// const wm= new WeakMap();
const obj = {};

function Area(height, width) {
    obj.height = height;
    obj.width = width;
    // wm.set(this,{height,width});
    // this.height = height;
    // this.width = width;
}

Area.prototype.getArea=function () {
    // return this.height * this.width;


    // const {height, width} = wm.get(this);
    // return height* width;
    // 이렇게 쓰면 외부에서 사용이 안된다. 

    return obj.height * obj.width ;
} 

let myarea = new Area(10,20);
console.log(myarea.getArea());

console.log(myarea.height);

console.log(wm.has(myarea)); // 여기서는 myarea가 존재하지만 null 하면 없어진다.

myarea=null;
console.log(wm.has(myarea));

*/

//17

/////////////////////////////////////////////////////////////////////////