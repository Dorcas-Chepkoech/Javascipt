/* 8. Map your values to functions, using[4], and pass the new list of
functions to the `addn(..)` from [5].*/

function numOne(){
    return 3;
}
function addn(arr,fn){
    var final=0;
    for (var i=0; i<arr.length; i++){
        final = final + arr[i];
    }
    return final;
}

console.log(addn([7,9],numOne));

function doubleIt(v){return v *2;}
function transform(arr,fn){
    var list = [];
    for(var  i=0; i<arr.length; i++){
        list[i]= fn(arr[i]);
    }
    return list;
}

console.log(transform([1,2,3,4,5],doubleIt));
function foo(x,y){
    return function(){
        return x + y;//closure happens here aided by var
    }
}
var x = foo(3,4);
console.dir(x());

function foo(v){
    return function(){
        return v;
    }
}
function add2(num1,num2){
    return add(num1(),num2());
}
console.log(add2(foo(40),foo(90)));



