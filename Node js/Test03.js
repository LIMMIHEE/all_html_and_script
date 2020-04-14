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
var vscope = 'global';
function fscope() {
    vscope = 'local';
    console.log(vscope);
}
fscope(); // local
console.log(vscope); //local
