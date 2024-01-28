const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    uid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        required:true,
        enum:["true","false"]
    }

})


module.exports = mongoose.model("user",UserSchema);