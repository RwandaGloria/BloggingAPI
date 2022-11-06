const express = require('express');
const createBlogRoute = express.Router();
const createController = require('../controllers.js/createBlog');
const blogModel = require('../models/blogs');

//This would take in a request and save it to a mongodb collection

//You want the user to be able to create the blog and then save it to the mongoDB

createBlogRoute.post('/create', createController.createBlog);

createBlogRoute.get('/blogs/:page', createController.getAllBlogs); //This should return all blogs published. 

createBlogRoute.put('/edit/:id', createController.editBlog); //edit a blog

createBlogRoute.delete('/delete/:id', createController.deleteBlog);
createBlogRoute.get('/blog/:id', createController.getBlogById);

//Want to filter by state using this route.
createBlogRoute.get('/user/blogs/filter/:param', createController.filterState);
// createBlogRoute.get('/:state', createController.deleteBlog);
createBlogRoute.put('/:id/published', createController.updateState);

createBlogRoute.get('/user/blogs/:page', createController.getMyBlogs);

createBlogRoute.get('/blogs/filter/readCount', createController.filterByReadCount);

createBlogRoute.get('/blogs/filter/readTime', createController.filterReadingTime);
// /blogs/filter/





module.exports =  { createBlogRoute }