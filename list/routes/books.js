const express = require('express'); 
const booksRouter = express.Router(); // this line creates a router: booksRouter

const books = [ // this is an array of book objects
    { id: 1, title: "Bleach Vol.1: The Death and The Strawberry", author: "Tite Kubo", imageUrl: "/bleach1.jpg", year: "2004" },
    { id: 2, title: "Bleach Vol.2: Goodbye Parakeet, Good Night My Sister", author: "Tite Kubo", imageUrl: "/bleach2.jpg", year: "2004" },
    { id: 3, title: "Bleach Vol.3: Memories in the Rain", author: "Tite Kubo", imageUrl: "/bleach3.jpg", year: "2004" },
]

function findBookById(req, res, next) {
    const requestedId = Number(req.params.id); //Number is used to convert the following string into a number, and the string is requesting the id from the params

    const book = books.find((book) => book.id === requestedId)  //This line uses the find method to find the book with the requested id

    if (book) {
        req.books = book; //this if statement checks if book exists, and if it exists, it sets the book const to the requested books
        next();
    } else {
        return res.status(404).send('Book not found'); // if it doesn't exist, it sends a 404 status and a message saying the book was not found
    }
}


booksRouter.get('/books', (req, res) => { //.get is used to get the books from the array
    res.json(books); //the server sends a response (res) in a JSON format.
});

booksRouter.get('/books/:id', findBookById, (req, res) => { //this line gets the book by id specifically, and uses the findBookById function to find the book. if the user types http://localhost:3000/api/books/1, it will get the book with the id of 1
    res.json(req.books);
});

booksRouter.post('/books', (req, res) => { //this the post request to add a book to the array.
    const book = req.body; //this line sets the book const to the request body
    book.id = books.length + 1; //when a new book is created, it adds +1 to the last book in the array, so the new book will have a new id. if there are 3 books, the new book will have an id of 4, and so forth
    books.push(book); //.push is used to add the book in the array
    res.status(201).json(book); //status 201 shows that the new book was created, and puts the book in a JSON format
});

booksRouter.put('/books/:id', findBookById, (req, res) => { //put is used to update an existing book

    req.books.title = req.body.title; //the follow lines set the book title, author, image, and year to the request body. Any changes in that order will update the selected book in the array.
    req.books.author = req.body.author;
    req.books.imageUrl = req.body.imageUrl;
    req.books.year = req.body.year;
    res.send(req.books); //This line send the updated book.

});

booksRouter.delete('/books/:id', findBookById, (req, res) => { //delete is used to delete a book
    const requestedId = Number(req.params.id);

    const requestedBook = books.findIndex((book) => book.id === requestedId);
    books.splice(requestedBook, 1); //splice is used to remove the book by 1 from the array

    res.status(204).send("Book deleted"); //status 204 shows that the book was deleted, and sends a message accordingly.
});


module.exports = booksRouter; //this exports the router to be used in app.js