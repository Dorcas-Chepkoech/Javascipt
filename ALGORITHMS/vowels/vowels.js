/*Write a function that returns the number of vowels used in a string.
Vowels are the characters 'a','e','i','o','u'.
vowels('Hi there')-->3
vowels('Why do you ask')-->
vowels('Why')-->0 */


//The first way
function vowels(str){
    let count = 0;
    const checker = ['a','e','i','o','u'];

    for (let char of str.toLowerCase()){
        if (checker.includes(char)){
            count++;
        }
    }
    return count;
}
///THE SECOND WAY
function vowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length :0;
}
