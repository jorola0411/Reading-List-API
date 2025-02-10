const express = require('express');
const booksRouter = express.Router();

const books = [
    { id: 1, title: "Bleach Vol.1: The Death and The Strawberry", author: "Tite Kubo", imageUrl: "/bleach1.jpg", year: "2004" },
    { id: 2, title: "Bleach Vol.2: Goodbye Parakeet, Good Night My Sister", author: "Tite Kubo", imageUrl: "/bleach2.jpg", year: "2004" },
    { id: 3, title: "Bleach Vol.3: Memories in the Rain", author: "Tite Kubo", imageUrl: "/bleach3.jpg", year: "2004" },
]

function findBookById(req, res, next) {
    const requestedId = Number(req.params.id);

    const book = books.find((book) => book.id === requestedId)

    if (book) {
        req.books = book;
        next();
    } else {
    return  res.status(404).send('Book not found');
    }
}


booksRouter.get('/books', (req, res) => {
    res.json(books);
});

booksRouter.get('/books/:id', findBookById, (req, res) => {
    res.json(req.books);
});

booksRouter.post('/books', (req, res) => {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(201).json(book);
});

booksRouter.put('/books/:id', findBookById, (req, res) => {

    req.books.title = req.body.title;
    req.books.author = req.body.author;
    req.books.imageUrl = req.body.imageUrl;
    req.books.year = req.body.year;
    res.send(req.books);
});

booksRouter.delete('/books/:id', findBookById, (req, res) => {
    const requestedId = Number(req.params.id);

    const requestedBook = books.findIndex((book) => book.id === requestedId);
    books.splice(requestedBook, 1);

    res.status(204).send("Book deleted");
});


module.exports = booksRouter;