# AltSchool Second Semester Exam --> Blogging API

## You are required to build a blogging api. The general idea here is that the api has a general endpoint that shows a list of articles that have been created by different people, and anybody that calls this endpoint, should be able to read a blog created by them or other users.

 * ✅ Users should have a first_name, last_name, email, password, (you can add other attributes you want to store about the user)
* ✅A user should be able to sign up and sign in into the blog app
* ✅Use JWT as authentication strategy and expire the token after 1 hour
* ✅A blog can be in two states; draft and published
* ✅Logged in and not logged in users should be able to get a list of published blogs created
* ✅Logged in and not logged in users should be able to to get a published blog
* ✅Logged in users should be able to create a blog.
* ✅When a blog is created, it is in draft state
* ✅The owner of the blog should be able to update the state of the blog to published
* ✅The owner of a blog should be able to edit the blog in draft or published state
* ✅The owner of the blog should be able to delete the blog in draft or published state
* ✅The owner of the blog should be able to get a list of their blogs. 
* ✅The endpoint should be paginated
* ✅It should be filterable by state
* ✅Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.
* ✅The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated, default it to 20 blogs per page. 
* ✅It should also be searchable by author, title and tags.
* ✅It should also be orderable by read_count, reading_time and timestamp
* ✅ a single blog is requested, the api should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1
* ✅Come up with any algorithm for calculating the reading_time of the blog.
* ✅Write tests for all endpoints


Note:
### ✅The owner of the blog should be logged in to perform actions
### ✅Use the MVC pattern

### Link to project documentation
[Click here](https://documenter.getpostman.com/view/24273780/2s8YYLKMWq#9279ff57-abde-4d41-b125-00edcbb084f2)
## Data Models
### User

|field|data_type|constraints|
|:----  |:--------|:----------|
|firstName  |String|required|
|lastName   |String|required|
|email |String| required, unique|
|password|String|required|

### Blog

|field| data_type| Constraints|
|:----  |:--------|:----------|
|title| String| required, unique|
|description | String| none|
|author| String| none| 
|state| String| either draft or published|
|read_count| Number| none| 
|Reading Time| Number| none|
|Tags| Array| none|
|Body| String| none|
|TimeStamp| Date| none|
