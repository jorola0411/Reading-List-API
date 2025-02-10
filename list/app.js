const express = require('express');
const list = require('./routes/books');
const app = express();
const PORT = 3000;

app.use('/routes/books', list);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})