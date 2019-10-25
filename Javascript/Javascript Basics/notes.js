/*const notes = ['Note 1', 'Note 2', 'Note 3'];
console.log(notes[0]);
console.log(notes[1]);
console.log(notes[2]);

console.log(notes.length);
notes.push('My New Note');
console.log(notes);

notes.splice(1,1, 'New Item');
console.log(notes);

notes.unshift('First note');
console.log(notes);
notes.shift();
console.log(notes);*/

const notes = [{
    title: 'My Next Trip',
    body: 'Vacation in Bali'
},{
    title: 'Habits to work on',
    body: 'Reading. Eating a bit better'
},{
    title: 'Office Modification',
    body:'Get a new seat'

}];
console.log(notes.length);
console.log(notes);
const index = notes.findIndex(function(note, index){
    return note.title === 'Habits to work on'
});
console.log(index);
// push three new objects with keys (title,body and city)

notes.push({title: 'Vacation',body:'Learn a new Town ',city: 'Kisumu'});
notes.push({title: 'Vacation 2.0',body:'travel is fun ',city: 'Bangkok'});
notes.push({title: 'Vacation 3.0',body:'Bonjour',city: 'Paris'});
console.log(notes);
