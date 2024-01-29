
const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
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
    },
    email:{
        type:String,
        required:true
    },
    blogId:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Favourite",favSchema);