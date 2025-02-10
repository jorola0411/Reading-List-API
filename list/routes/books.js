const express = require('express');
const router = express.Router();

const books = [
    { id: 1, title: "Bleach Vol.1: The Death and The Strawberry", author: "Tite Kubo", imageURL: "/images/bleach1.jpg", year: "2004" },
    { id: 2, title: "Bleach Vol.2: Goodbye Parakeet, Good Night My Sister", author: "Tite Kubo", imageURL: "/images/bleach2.jpg", year: "2004" },
    { id: 3, title: "Bleach Vol.3: Memories in the Rain", author: "Tite Kubo", imageURL: "/images/bleach3.jpg", year: "2004" },
]