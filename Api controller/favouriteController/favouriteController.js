const favouriteCollection = require("../../Database/Schemas/favouriteSchema/favouriteSchema")
const getFavouriteBlogs = (userEmail) =>{
    const res = favouriteCollection.find({email:userEmail});
    return res;
}

const deleteBlogs = (id) =>{
    const res = favouriteCollection.findOneAndDelete({blogId:id});
    return res;

}

const addFavouriteBlog = async (blog) => {
   
         const findData = await favouriteCollection.find({ email: blog.email });
      if (findData.length > 0) { 
        const isExist = findData.some(user => user.blogId === blog.blogId);
        if (!isExist) {
          const res = await favouriteCollection.create(blog);
          return res;
        }
         else {
          return { message: "Blog already exists in favorites." };
        }
      } 
      
      else {
      
        const res = await favouriteCollection.create(blog);
        return res;
      }
    
  };
  



module.exports = {
    getFavouriteBlogs,
    addFavouriteBlog,
    deleteBlogs
}