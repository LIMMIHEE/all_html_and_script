function sort(cb) {
    cb();
}
function b() {
    console.log('hello collback');
    
}
sort(b); 
//sort 함수를 호출하는데 매개변수를 함수로 넘김. 
//이때의 함수를 callBack 함수라고 한다.
//여기서 callback 함수는 b이다.

sort(function(){console.log('callBack2')})

sort(()=>(console.log('callBack2')));