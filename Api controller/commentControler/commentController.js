
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

module.exports = {
    addblogsComment,
    getblogsComment,
    getSpeceficBlogComment
}