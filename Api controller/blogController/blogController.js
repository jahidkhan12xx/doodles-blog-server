
const blogCollection = require("../../Database/Schemas/blogSchema/blogSchema")
const favouriteCollection = require("../../Database/Schemas/favouriteSchema/favouriteSchema")


const createBlog = (blog) =>{
    const res = blogCollection.create(blog);
    return res;
}

const getBlogs = () =>{
    const res = blogCollection.find();
    return res;
}

const deleteBlogSpecific = async (id)=>{
    console.log(id);
    const ac = await favouriteCollection.findOneAndDelete({blogId:id});
    const res = await  blogCollection.findByIdAndDelete(id);
    return res;
}

const updateBlog = async (id,blog) =>{
    const res = await  blogCollection.findByIdAndUpdate(id,{
        $set:{
            title:blog.title,
            body:blog.body
        },
       
    }, 
    {
        new:true
    })

    return res;
}


const getSingleBlog = (id) =>{
    const res = blogCollection.findById(id);
    return res;
}



module.exports = {
    getBlogs,
    getSingleBlog,
    createBlog,
    deleteBlogSpecific,
    updateBlog
}