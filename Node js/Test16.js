//https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EA%B0%90%EC%9E%90

const url = require('url');
//const대신 var도 좋음.
const queryString = require('querystring');
//query를 알고 싶을때

var urlStr = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EA%B0%90%EC%9E%90";
var curUrl = url.parse(urlStr);
//curUrl : 객체
var curStr = url.format(curUrl);
// 다시 문자열로 바꾸기

console.log(curUrl);
console.log(curStr);

var param = queryString.parse(curUrl.query);
// 이건 객체로 만든 것만 가능하다.
console.log(param.query);
console.log(`${param.query}`);
//템플릿 문자열
