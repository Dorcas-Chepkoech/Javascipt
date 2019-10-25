/* 
Write a function that accepts a string. The function should capitalize the
first letter of each word in the string then return the capitalized string.
-----EXAMPLES-----
capitalize ('a short sentence') --> A Short Sentence
capitalize ('a lazy fox')--> A Lazy Fox
capitalize ('look, its working') --> Look, Its Working  */  


  function capitalize(str){
  const words =[];
   for (let word of str.split(' ')){
       words.push(word[0].toUpperCase()+ word.slice(1));
   }
   return words.join(' ');
}