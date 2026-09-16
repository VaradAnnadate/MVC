const express = require('express');
const path = require('path');

const booksRouter = express.Router();

const getBooksPath = path.join(__dirname, "../Controller/Books/getBooks.js")
const getBooksIDPath = path.join(__dirname, "../Controller/Books/getBooksID.js")
const postBooksPath = path.join(__dirname, "../Controller/Books/postBooks.js")
const patchBooksPath = path.join(__dirname, "../Controller/Books/patchBooks.js")
const deleteBooksPath = path.join(__dirname, "../Controller/Books/deleteBooks.js")

const getBooks = require(getBooksPath);
const getBooksID = require(getBooksIDPath);
const postBooks = require(postBooksPath);
const patchBooks = require(patchBooksPath);
const deleteBooks = require(deleteBooksPath);

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBooksID);

booksRouter.post("/", postBooks);

booksRouter.patch("/:id", patchBooks);

booksRouter.delete("/:id", deleteBooks);

module.exports = booksRouter;