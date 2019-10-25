function userCreator(name,score){
    let newUser={};
    newUser.name=name;
    newUser.score=score;
    newUser.increment=function(){
        newUser.score++
    }
    return newUser;
};
let user1=userCreator('atem',10);
let user2=userCreator('Chep',11);
user1.increment();
user2.increment();
console.log(user1);