/*
import log from './mylog';


const root = document.querySelector('#root');
root.innerHTML = `<p> Hellow World ! </p>`;

log('my first test');
*/
//module(import&export)의 이해
/////////////////////////////////////////

import MyLogger  from './mylog';
import _ from './Utility'

_.log('my fitst test');
// console.log(`getTime is ${getTime()}`);
_.log(`getCurrentHour is ${getCurrentHour()}`);

const logger = new MyLogger();
_.log(`lectures of codesaquad are ${logger.getLectures()}`);




// const root = document.querySelector('#root');
// root.innerHTML = `<p> Hellow World ! </p>`;

// log('my first test');


//module(import&export)기반 서비스 코드 구현방법
/////////////////////////////////////////