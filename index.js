const express = require("express");
const fs = require("fs");
const path = require("path");

const pathToUsers = path.join(__dirname, "Routers/users.js")
const pathToBooks = path.join(__dirname, "Routers/books.js")
const pathToLogger = path.join(__dirname, "Middleware/logger.js")

const usersRouter = require(pathToUsers);
const booksRouter = require(pathToBooks);
const logger = require(pathToLogger);

const app = express();

app.use(express.json());
app.use(logger);
const pathToFile = path.join(__dirname, "users.json");
const pathToFile2 = path.join(__dirname, "books.json");

app.use('/users', usersRouter);
app.use('/books', booksRouter);

app.listen(3002);