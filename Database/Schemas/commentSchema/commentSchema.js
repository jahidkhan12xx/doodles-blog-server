const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    blogId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model("Comment",commentSchema);