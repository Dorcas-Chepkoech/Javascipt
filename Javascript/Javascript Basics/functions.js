console.log(result);// function- input (parameters), code, output(return value)
let greetUser = function (){
    console.log('Welcome User');
} 
console.log(result);
greetUser();
greetUser();

let square = function(num){
    let result = num * num;
    return result;
}
let value = square(5);
let otheValue = square(9);


let convertFahrenheitToCelsius = function(fahrenheit){
    let result = (fahrenheit-32)*5/9;
    return result;
}
let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);