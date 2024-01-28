
const blogSchema = require("../../Database/Schemas/blogSchema/blogSchema")


const createBlog = (blog) =>{
    const res = blogSchema.create(blog);
    return res;
}

const getBlogs = () =>{
    const res = blogSchema.find();
    return res;
}


const getSingleBlog = (id) =>{
    const res = blogSchema.findById(id);
    return res;
}



module.exports = {
    getBlogs,
    getSingleBlog,
    createBlog
}