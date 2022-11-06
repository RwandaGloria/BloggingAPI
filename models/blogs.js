//This would take in the blogs and store them to a mongoDB place. 

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const blogModel = new Schema ({

    //title, read_count, description, tags, author, timeStamp, state. 
    title : 
    {
        type: String,
        required: true,
        unique: true

    },
    readingTime: 
    {
        type: String,
        default: 'NaN'

    },
    read_count:
    {
        type: Number,
        default: 0
    },

    description : {

        type: String
    },

    tags : {
    type: Array
    },
    author : {
        type: String
        // ref: "users"
    },
    authorID : {
        type: Schema.Types.ObjectId, 
        ref: "users"
    },
    timeStamp : {
        type: Date,
        default: Date.now
    },
    state: 
    {
        type: String, 
        required: true,
        default: "draft"
    }, 
    body: {
        type: String, 
        required: true
    }

});

//I want to calculate reading Time here. 
blogModel.pre("save", async function (next) 
{

    try{

   
    const blog = this;
    const body = this.body;

    const wordsCount = body.split(' ').length; //To get the wordCount of the blog. 
    const definedWPM = 200;
    
    const readingTime = Math.round((wordsCount/ definedWPM)).toString() + ' minutes';
    
   
    this.readingTime = readingTime;
}
catch(err) {

    res.json({err});
}

})


blogModel.method.ReadCount = async function(){

    blog.read_count +=1;
    blogModel.blog.save();

}

const blog = mongoose.model("blog", blogModel);


module.exports = {blog }