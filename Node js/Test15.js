const Users = require('./user');

function showUser(){
    let user = Users.getUser();
    console.log(user.id);
    console.log(user.name);
}

showUser();