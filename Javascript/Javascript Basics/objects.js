let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
let myMovies = {
    title: 'Harry Potter',
    author:'JK Rowling'
}
console.log(`${myBook.title} by ${myBook.author} pages ${myBook.pageCount}`);

let me = {
    name: 'Daisy',
    mylocation:'Kisumu'
} 
console.log(`${me.name} lives in ${me.mylocation}`);

let getSummary = function(book){ //declaring a variable, assigning a function
    return{// returning an object with key summary
        summary: `${book.title} by ${book.author}`
    }
}
let bookSummary = getSummary(myBook);
//calling the fxn where the object has been returned.
console.log(bookSummary.summary);

let movieSummary= getSummary(myMovies);
console.log(movieSummary.summary);