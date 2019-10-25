// 1. Write two functions,which return a different number value when called.
function foo(){
    return 42;
}
function bar(){
    return 10;
}

/* 2.Write an `add(..)` function that takes two numbers and adds them and
return the result. Call `add(..)` with the results of your two functions from 
[1] and print the results on the console.*/
function add(x,y){
    return x+y;
}
add(42,10);



/* 3.Write an `add2(..)` that takes two functions instead of two numbers and
it call those two functions and sends those values to `add(..)`, just like
you did in [2] above.*/

function add2(fn1,fn2){
    return add(fn1(),fn2());
}
console.log(add2(foo,bar));

/* 4.Replace your two functions  from [1] with a single function that takes a
value and returns a function back where the returned function will return 
the value when its called*/
function foo(v){
    return function(){
        return v;
    }
}
function add2(fn1,fn2){
    return add(foo(),bar());
}
add2(foo(40),foo(90));

/*5.Write an `addn(..)` that can take an array of two or more functions and 
using only `add(..)` adds them together. Try it with a loop. 
try it without a loop. (Recursion) Try it with built in array functional 
helpers(map/reduce)*/
//With a loop
function addn(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum= add2(foo(arr[i]),foo(sum));
    }
    return sum;
}
console.log(addn([10,42,56,73]));

//RECURSION
function addn(arr){
    if (arr.length <= 2){
        return add2(arr[0],arr[1]);
    }
    return addn([
        function(){
        return add2(arr[0],arr[1]);
    }
    ].concat(arr.slice(2))
    );
}
console.log(addn([foo(10),foo(42),foo(56),foo(73)]));

//MAP/REDUCE
function addn(arr){
    return arr.slice(1)
    .reduce(function(prev,cur){
        return function(){
            return add2(prev,cur);
        };
    }, arr[0])()
}
addn([foo(10),foo(42),foo(56),foo(73)]);

var arr=[10,42,56,73,15,2,98,7];
arr= arr.map(foo)

//without a loop



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

/* 8. Map your values to functions, using[4], and pass the new list of
functions to the `addn(..)` from [5].*/
var arr = [10,100,30,100,42,10,15];
var newValues = arr.map((data) => foo(data));
addn(newValues);var arr = [10,100,30,100,42,10,15];
var newValues = arr.map((data) => foo(data));
addn(newValues);

