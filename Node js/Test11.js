function add(cb){
 cb();
}

function a() {
    console.log('hello');
}
add(a); //a:function a() { console.log('hello');
//-> 