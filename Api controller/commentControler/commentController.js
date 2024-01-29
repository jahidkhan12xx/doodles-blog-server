
const commentCollection = require("../../Database/Schemas/commentSchema/commentSchema")
const addblogsComment = (comment) =>{

    const res = commentCollection.create(comment);
    return res;

}

const getblogsComment = () =>{
    const res = commentCollection.find();
    return res;
}

const getSpeceficBlogComment = (id) =>{
    const res = commentCollection.find({blogId:id});
    return res;

}

const deleteComment = (id) =>{
    const res = commentCollection.findByIdAndDelete(id)
    return res;
}

const updateComment = (id,data) =>{
    const res = commentCollection.findByIdAndUpdate(id,{
        $set:{
            body:data
        }
    },{
        new:true
    })

    return res;

}

module.exports = {
    addblogsComment,
    getblogsComment,
    getSpeceficBlogComment,
    deleteComment,
    updateComment
}