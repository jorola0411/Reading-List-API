const express = require('express');
const app = express();
const PORT = 3000;
const booksRouter = require('./routes/books');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})