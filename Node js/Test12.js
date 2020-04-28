console.log('hello node');
console.log('숫자입니다. %d',10);
console.log('문자열립니다. %s','nodejs');

const person={
    name:"park",
    age:99
}
console.log('json객체입니다 %j',person);
console.dir(person);
console.log(__filename); //현재 실행한 파일의 이름
console.log(__dirname);//현재 실행한 파일의 패스

console.log(process.argv);//아규먼트 가져오기?
//process.argv = 명령형 매개변수
//앞은 내가 실행한 명령어와 파일이 들어간다.

console.log(process.argv.length);

console.log(process.version);
//프로세스 객체의 버전
