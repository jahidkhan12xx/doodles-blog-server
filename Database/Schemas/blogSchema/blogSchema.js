const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

})


module.exports =  mongoose.model("Blogs",BlogSchema);
