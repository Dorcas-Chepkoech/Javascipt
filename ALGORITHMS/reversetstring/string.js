function reverse(str){
    let reversed = '';
    for (let character of str)
{
    reversed = character + reversed;
}
return reversed;
}
//The second way
function reverse(str){
    return str
    .split('')
    .reverse()
    .join('')
}
//The Third way
 function reverse(str){
     return str.split('').reduce((prev,char) => char + prev, '');
 }