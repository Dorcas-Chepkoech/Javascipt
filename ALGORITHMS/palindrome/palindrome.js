//--DIRECTIONS
//Given a string, return true if thje string is a palindrome
//or false if it not. Palindromes are strings that form the same word if reversed
//*Do* include spaces and punctuation in determining if the string is a palindrome
//--Examples:
//palindrome("abba") === true
//palindrome("abcdefg") === false

//The First Way
function palindrome(str){
    const reversed = str
    .split('')
    .reverse()
    .join('');
    return str === reversed;
}
//THE SECOND WAY
function palindrome(str){
    return str.split('').every((char,i) =>{
        return char ===str[str.length - i -1];
    });
}