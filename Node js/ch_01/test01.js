//os:코어모듈

const os=require('os'); //os 모듈을 가져와서 os에 대입하겠다.
console.log('os type? '+os.type());

//hostname()
console.log(os.hostname());
console.log(os.freemem());

//freemem()

//process모듈 evn속성
const process = require('process');
console.log(`Version: ${process.version}`);
console.log(`platform is ${process.platform}`);

//versions 속성
//platform 속성
