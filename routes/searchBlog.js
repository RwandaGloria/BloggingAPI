const express = require('express');
const searchController = require('../controllers.js/searchBlog');

//This route is responsible for searching, whether by authorName, title or tags. 

const searchRouter = express.Router();

//These are the routes a user to search by title, author or by tags
searchRouter.get('/blog/:page/bytitle', searchController.searchBlogByTitle);
searchRouter.get('/blog/:page/byauthor', searchController.searchBlogByAuthor);
searchRouter.get('/blog/:page/bytag', searchController.searchBlogByTags);


module.exports = {searchRouter}