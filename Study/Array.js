const arr = [1,2,3,4];

console.log(arr[0]);

const arr1 = new Array();
arr1[0]=3;
arr1[1]=4;
console.log(arr1[0]);

const arr2=[];
arr2[0]='kim';
arr2['name']='kim';

console.log(arr[0]);
console.log(arr2['name']);

const obj = {
    name:'kim',
    age:20,
    height:170
}
//in 뒤의 객체에서 키값이 차례대로 name에 들어간다.
for (let s in obj) {
    console.log('key:'+s+', value');
}