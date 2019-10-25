//make a pure function 'bar(..)' to wrap around 'foo(..)'.
/*
function bar(x,y,z){
    
    foo(x);
    return [y,z];

function foo(x){
    y++;
    z = x*y;
}
    
}

var y = 5, z;

console.log(bar(20,5));
console.log(bar(25,6));

//
//
//COMPOSITION

/*function sum(x,y){
    return x + y;
}

function mult(x,y){
    return x*y;
}
function multAndSum(x,y,z){
    return sum(mult(x,y),z);
}
console.log(multAndSum(3,4,5));
    /*var z = mult(3,4);
z = sum(z,5);
console.log(z);

sum(mult(3,4),5);
console.log(sum(mult(3,4),5));
function sum(x,y){
    return x +y;
}
function mult(x,y){
    return x*y;
}

function compose2(fn1,fn2){
    return function comp(){
        var args = [].slice.call(arguments);
        return fn2(
            fn1(args.shift(),args.shift()),
            args.shift()
        );
    }
}
var multAndSum = compose2(mult,sum);
multAndSum(3,4,5);
console.log(multAndSum(3,4,5));

function doubleThemImmutable(list){
    //immutability has been done in the next line
    //doesnt change the array but the contents change


    var newList = [];

    for (var i=0; i<list.length; i++){
        newList[i] = list[i] * 2;
    }
    return newList;
}
var arr = [3,4,5];
var arr2 = doubleThemImmutable(arr);

console.log(arr);
console.log(arr2);
function foo(){
    var count = 0;
    return function(){
        return count++;
    };
}
var x= foo();
console.log(x(),x(),x());

function sumX(x){
    return function(y){
        return x + y;
    };
}

var add10 = sumX(10);

console.log(add10(3));
console.log(add10(14));*/

/*exercise
Define `foo(..)` so that it produces a function which remembers only
the first two arguments that were passed to `foo(..)`, and always adds 
them
function foo(x,y){
    return function(){
        return x + y;//closure happens here aided by var
    }
}
var x = foo(3,4);
console.log(x);
//RECURSION STARTS HERE
function sumIter(){
    var sum=0;
    for (var i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(sumIter(3,4,5));


//recursion 2
function sumRecur(){
    var args = [].slice.call(arguments);
    if (args.length <= 2){
        return args[0] + args[1];
    }
    return (
        args[0] + sumRecur.apply(null,args.slice(1))
    );
}
console.log(sumRecur(3,4,5));

 //ES6 SIMPLIFIED
 function sumRecur(...args){
    if (args.length <= 2){
        return args[0] + args[1];
    }
    return (
        args[0] + sumRecur(...args.slice(1))
    );
}
console.log(sumRecur(3,4,5));*/
/*Exercise Recursive
turn `mult(..)` into a recursive function that can work on as 
many arguments as nesessary
function mult(...args){//base case
    if (args.length <= 2){
        return args[0] * args[1];
    }//recursive(reductive) call
    return (
        args[0] * mult(...args.slice(1))
    );
}
console.log(mult(3,4,5));
console.log(mult(3,4,5,6));


function doubleIt(v){return v *2;}
function transform(arr,fn){
    var list = [];
    for(var  i=0; i<arr.length; i++){
        list[i]= fn(arr[i]);
    }
    return list;
}

console.log(transform([1,2,3,4,5],doubleIt));*/

function doubleIt(v){return v*2;}
[1,2,3,4,5].map (doubleIt);
