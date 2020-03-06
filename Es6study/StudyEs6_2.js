/*
function print(){
    let list = document.querySelectorAll("li");
    console.log(toString.call(list));
    let listArray = Array.from(list);   //li 노드로 구성된 배열
    console.log(toString.call(listArray));
    let eArray = listArray.filter(function(v){
        return v.innerText.includes("e");
    });
    return eArray;
}
print();

*/
//실습 1

/////////////////////////////////////////////////////////////////////////


/*
const name="crong";
const age = 33;

const obj={
    name : name;
    age : age
}
console.log(obj)
*/
/*
function getObj(){
    const name = "crong";

    const GetName = function(){
        return name;
    }
    const setName = function(newname){
        name = newname;
    }
    const printName= function(){
        console.log(name);
    }

    // return{
    //     GetName : GetName,
    //     setName : setName
    // }  아래와 같이 축약 가능.

    return{
        GetName,setName,name
    }
}
var obj = getObj();
console.log(obj.GetName());


*/
//12강

/////////////////////////////////////////////////////////////////////////

/*
let data = ["crong","honux","jk", "jinny"];
//let jisu  = data[0];
//let jung = data[2];
let [jisu, ,jung] = data;

*/
//13강

/////////////////////////////////////////////////////////////////////////


/*
let obj = {
    name="crong",
    address : "korea",
    age : 10
}

let {name,age} = obj;
console.log(name,age);

let {name:myname, age:myage} = obj;
console.log(myname,myage);

*/
//14강

/////////////////////////////////////////////////////////////////////////


/*
var news = [
    {
        "title" : "n",
        "imgurl" : "https://www.yna.co.kr/view/MYH20200302016100797",
        "newslist" : [
            "우리가 버린 마스크 어디로 가나?",
            "사회복지모금회 신천지, 협의없이 120억원 현금 이체",
            "칠레 이스터섬 모아이 석상, 트럭에 들이받혀 '와르르'",
            "신천지 대구 예배 부산 84번, 무증상인데도 바이러스 배출"
        ]
    },{
        "title" : "bbbbbb",
        "imgurl" : "https://news.joins.com/article/23720346",
        "newslist" : [
            "'5부제 전 하나라도 더' 약국·우체국·농협 마스크 구매 행렬",
            "'힘든 사냥보다…' 어선 올라 물고기 슬쩍 수달 포착 눈길",
            "칠레 이스터섬 모아이 석상, 트럭에 들이받혀 '와르르'",
            "신천지 대구 예배 부산 84번, 무증상인데도 바이러스 배출"
        ]
    }


];

// let [,mbc]=news;
// console.log(mbc);
// let {title, imgurl} = mbc;
// console.log(title);

let [, {title,imgurl}] = news;
console.log(title);
// 위에 걸 한번에.

*/
//15강

/////////////////////////////////////////////////////////////////////////

/* 
var news = [
    {
        "title" : "n",
        "imgurl" : "https://www.yna.co.kr/view/MYH20200302016100797",
        "newslist" : [
            "우리가 버린 마스크 어디로 가나?",
            "사회복지모금회 신천지, 협의없이 120억원 현금 이체",
            "칠레 이스터섬 모아이 석상, 트럭에 들이받혀 '와르르'",
            "신천지 대구 예배 부산 84번, 무증상인데도 바이러스 배출"
        ]
    },{
        "title" : "mbc",
        "imgurl" : "https://news.joins.com/article/23720346",
        "newslist" : [
            "'5부제 전 하나라도 더' 약국·우체국·농협 마스크 구매 행렬",
            "'힘든 사냥보다…' 어선 올라 물고기 슬쩍 수달 포착 눈길",
            "칠레 이스터섬 모아이 석상, 트럭에 들이받혀 '와르르'",
            "신천지 대구 예배 부산 84번, 무증상인데도 바이러스 배출"
        ]
    }


];
function getNewsList([,{newslist}]){
    console.log(newslist);
}
getNewsList(news);
*/
//16 -1

/*
document.querySelector("div").addEventListener("click",function({target}){
    console.log(target.tagName);
    console.log(target.innerText);
})
*/

//16-2

/////////////////////////////////////////////////////////////////////////