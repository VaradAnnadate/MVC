const express = require('express');
const path = require('path');

const usersRouter = express.Router();

const getUsersPath = path.join(__dirname, "../Controller/Users/getUsers.js")
const getUsersIDPath = path.join(__dirname, "../Controller/Users/getUsersID.js")
const postUsersPath = path.join(__dirname, "../Controller/Users/postUsers.js")
const patchUsersPath = path.join(__dirname, "../Controller/Users/patchUsers.js")
const deleteUsersPath = path.join(__dirname, "../Controller/Users/deleteUsers.js")

const getUsers = require(getUsersPath);
const getUsersID = require(getUsersIDPath);
const postUsers = require(postUsersPath);
const patchUsers = require(patchUsersPath);
const deleteUsers = require(deleteUsersPath);

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUsersID);

usersRouter.post("/", postUsers);

usersRouter.patch("/:id", patchUsers);

usersRouter.delete("/:id", deleteUsers);

module.exports = usersRouter;