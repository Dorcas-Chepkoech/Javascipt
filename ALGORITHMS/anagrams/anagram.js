/* 
---DIRECTIONS
Check to see if two provided strings are anagrams of each other.
one string is an anagram of another if it uses the same characters
in the same quantity. only consider characters not spaces or punctuation
Consider capital letters to be the same as lower case
EXAMPLES
anagrams('rail safety', 'fairy tales') -->True
anagrams('RAIL! SAFETY', 'fairy tales') -->True
anagrams('Hi there', 'Bye there') -->False
*/
function anagrams(stringA,stringB){
    return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str){
    return str
    .replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
};