const express = require('express'); // This line imports express from the node modules
const app = express(); // This line creates the express server
const PORT = 3000; // This line sets the port for the server
const booksRouter = require('./routes/books'); //This line imports the router from the books.js file
const bodyParser = require('body-parser'); // This line imports body-parser from the node modules

app.use(bodyParser.json()); //app.use is used to add middleware, in this case, bodyParser.
app.use('/api', booksRouter); //this tells the server to use the booksRouter for any requests that start with /api

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); //This line starts the server and sends a message to the console.
})