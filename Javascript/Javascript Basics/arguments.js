let add = function (a,b,c){
    return a + b + c;
}

let result = add(10,1,5);
console.log(result);

// Default arguments
let getScoreText = function(name = 'anonymous',score = 0){
    return `Name: ${name}  -score: ${score}`;
}
let scoreText = getScoreText('Chics', 67);
console.log(scoreText);

var city='New York';
console.log(`I love ${city}`);

let getTip = function(total,tipPercent = .2){
    let percent = tipPercent*100;
    let tip = total* tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;

}
let tip = getTip(12000);
console.log(tip);