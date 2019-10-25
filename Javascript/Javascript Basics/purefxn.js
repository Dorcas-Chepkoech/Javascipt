/*let answer = function multiply(num){
    let result = num*num
    return result
}let answer = function multiply(num){let answer = function multiply(num){
    let result = num*num
    return result
}
console.log(answer(9));
    let result = num*num
    return result
}
console.log(answer(9));
console.log(answer(9));


//impure fxn because it has access to var which is not internal
function foo(x){
    y=x*2;
    z=x*3;
}
 var y,z;
 foo(5);
 
console.log(y,z);

function foo(x){
    y=y*x;
    z=y*x;
}
var y=2,z=3;

foo(5);
console.log(y,z);

foo(5);
console.log(y,z);*/
//

//

//re-do

function bar(x,y,z){
    foo(x);
    return [y,z];
     function foo(x){
         y = y*x;
         z = z*x;
     }
}

console.log(bar(5,2,3));

bar(5,10,15);