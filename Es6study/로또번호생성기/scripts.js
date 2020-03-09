const SETTING = {
    name:"LUCKY LOTTO!",
    count:6,
    maxNumber : 45
}
let lottoNum = [];

function getRandomNumber(maxNumber) {
    if(lottoNum.length<6){
        let rannumber = Math.floor(Math.random()*(maxNumber-1+1))+1;
        if(same(rannumber)){
            lottoNum.push(rannumber);
        }
        getRandomNumber(SETTING.maxNumber);
    }
   

    function same(n){
        return lottoNum.every((e)=> n!== e);
    }
}
getRandomNumber(SETTING.maxNumber);

console.log(lottoNum);

