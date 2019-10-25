// 1. Write two functions,which return a different number value when called.
function num1(){
    return 7;
};
function num2(){
        return 9;
    };
  console.log(num1(), num2());  

/* 2.Write an `add(..)` function that takes two numbers and adds them and
return the result. Call `add(..)` with the results of your two functions from 
[1] and print the results on the console.*/

function add(x,y){
    return x+y;
}
console.log(add(7,9));

/* 3.Write an `add2(..)` that takes two functions instead of two numbers and
it call those two functions and sends those values to `add(..)`, just like
you did in [2] above.*/


function add2(func1,func2){
    return add(func1,func2);
}
console.log(add2(num1(),num2()));
//or

/*function add2(fn1,fn2){
    return add(fn1(),fn2());
}
console.log(add2(num1(67),num2(87)));*/

/* 4.Replace your two functions  from [1] with a single function that takes a
value and returns a function back where the returned function will return 
the value when its called*/
function numOne(){
    return function(){
        return 7;
    };
}
var x= numOne();
console.log(x());

function foo(v){
    return function(){
        return v;
    }
}
function add2(num1,num2){
    return add(num1(),num2());
}
console.log(add2(foo(40),foo(90)));

/*5.Write an `addn(..)` that can take an array of two or more functions and 
using only `add(..)` adds them together. Try it with a loop. 
try it without a loop. (Recursion) Try it with built in array functional 
helpers(map/reduce)*/
//With a loop
function addn(...args){//base case
    if (args.length <= 0){
        return args[0] + args[1];
    }//recursive(reductive) call
}
console.log(addn((num1()),(num2())));
//without a loop
function addn(){
    var sum=0;
    for (var i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(addn((num1()),(num2())));
// With built in array functional helpers




/*6. Start with an array of odd and even numbers(with  some duplicates), and 
trim it down to only have unique value.*/
    var data = [2,2,4,3,6,7,8,8,9,1,13,27.99,88.88,10,12.0];
    let uniq = data.filter((v,i) => data.indexOf(v) ===i);
    console.log(uniq);
/* 7. Filter your array to only have even numbers in it.*/

var data = [2,2,4,3,6,7,8,8,9,1];

var evenNo = uniq.filter(function(x) {
  if (x % 2 === 0 || x === 0) {
    return x;
  }
})

console.log(evenNo);


