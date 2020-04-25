//user / name:kim. name:lee. name :kang,name:park
//show로 위 값들 전부 출력

/*
const user = {
    name:'kim',
    name:'lee',
    name:'kang',
    name:'park',
    show: function () {
        for (const value of user.name) {
            console.log(value);
        }
    }
};
user.show();
*/
//... 일케 하면 안됌. 이름 겹쳐서 같은 걸로 인식해버림.

const user = {
    name:['kim','lee','kang','park'],
    show: function () {
        for (const value in user.name) {
            console.log(user.name[value]);
        }
    }
};
user.show();


const users2 = new Object();
users2.name=['kim'];
users2.name[1]='lee';
users2.name[2]='kang';
users2.name[3]='park';
users2.show=function () {
    for (const value in users2.name) {
        console.log(users2.name[value]);
    }
}
users2.show();

function user3(name1,name2,name3,name4) {
    this.name=[name1,name2,name3,name4];
    this.show = function () {
        for (const value in this.name) {
            console.log(this.name[value]);
        }
    };
    
}
const users3=new user3('kim','lee','kang','park');
users3.show();
