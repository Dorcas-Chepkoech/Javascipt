//Create an array of five todos
//Print the first and last items
/*let todos = ['code', 'play','sleep', 'write','read'];

console.log(todos[0],todos[4]);
console.log(todos[4]);

console.log(`${todos[0]} - ${todos[4]}`);
//line 10: if you do not know the no of the array//
console.log(`${todos[0]} - ${todos[todos.length-2]}`);

//add new item to todos array at the end

//add new item to todos array at first position
todos.unshift('todo1');
console.log(todos);
todos.push('todo2');
console.log(todos);*/

const todos = ['Order cat food', 'Clean Kitchen', 'Buy Food','Do Work',
'Exercise'];

todos.forEach(function(todo, index){
    const num = index +1.0;
    console.log(`${num}. ${todo}`);
});
