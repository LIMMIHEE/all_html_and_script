//3가지 방법으로 직접 만들기

const score = {
    kor:100,
    eng:70,
    math:80,
    sum:function () {
        return this.kor+this.eng+this.math;
    },
    ave:function () {
        return (this.kor+this.eng+this.math)/3;
    }
}

const score_1 = new Object();
score_1.kor=10;
score_1.eng=20;
score_1.math=30;
score_1.sum = function () {
    return this.kor+this.eng+this.math;
};
score_1.ave=function () {
    return (this.kor+this.eng+this.math)/3;
};
console.log(score_1.sum());
// 이때는 프로토 타입 안써도 ㄱㅊ음.

function score_2(kor, eng,math) {
    this.kor =kor;
    this.eng=eng;
    this.math=math;
    this.sum = function sum() {
        return this.kor+this.eng+this.math;
    };
    this.ave = function ave() {
        return (this.kor+this.eng+this.math)/3;
    };
};
// 이때는 프로토 타입 안써도 여기서는 프로토 써야함.
score_2.prototype.test = function () {
    return this.kor+this.eng+this.math;
};
// score_2.test2 = function () {
//     return this.kor+this.eng+this.math;
// };
//-> 이거는 불가능
const score_3 = new score_2(79,99,88);

console.log(score_3.sum());
console.log(score_3.test());