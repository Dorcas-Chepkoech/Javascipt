/*Write a function that accepts a positive number N
The function should console log a pyramid shape with N levels using the # character.
Make sure the pyramid has spaces on the left *and* right hand sides! 
----EXAMPLES
pyramid(1)
 '#'
  pyramid(2)
  ' # '
  '###'
  pyramid(3)
  '  #  '
  ' ### '
  '#####'*/
   function pyramid(n){
       ////important line
       const midpoint = Math.floor((2*n -1)/2)
       for (let row =0; row < n; row++) {
           let level = '';
           for (let column = 0; column<2*n-1; column++){
               //determines the midpoint in the pyramid
               if (midpoint - row <= column && midpoint +row >= column)
               { 
                   level += '#';
                              
           } else {
               level += ' ';
           }}
           console.log(level);

       }

    }