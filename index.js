const express = require('express');
const cors = require("cors");
const { default: mongoose } = require('mongoose');
const { createUser, getUser } = require('./Api controller/userController/userController');
const { createBlog, getBlogs, getSingleBlog, deleteBlogSpecific, updateBlog } = require('./Api controller/blogController/blogController');
const { addblogsComment, getblogsComment, getSpeceficBlogComment, deleteComment, updateComment } = require('./Api controller/commentControler/commentController');
const { getFavouriteBlogs, addFavouriteBlog, deleteBlogs } = require('./Api controller/favouriteController/favouriteController');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



//middleware

app.use(cors());
app.use(express.json());


//Database Connection

mongoose.connect(process.env.URI);
mongoose.connection.on("connected",()=>{
    console.log("Database is connected");
})



//Api's

//user related
app.post("/api/v1/users",async(req,res)=>{
    const userData = req.body.user;
  
    const result = await createUser(userData);
    res.status(200).send({insertedId : result._id});
})

app.get("/api/v1/users", async(req,res)=>{
    const result = await getUser();
    res.send(result);
})


//blogs related

app.post("/api/v1/blogs",async(req,res)=>{
  const blogData = req.body.blog;
  
  const result = await createBlog(blogData);
  res.status(200).send({insertedId : result._id});
})

app.get("/api/v1/getAllBlogs", async(req,res)=>{
  const result = await getBlogs();
  res.status(200).send(result);
})

app.get("/api/v1/getSpecificBlog/:id", async(req,res)=>{
  const id = req.params.id;
  const result = await getSingleBlog(id);
  res.send(result);
})



app.delete("/api/v1/deleteBlog/:id", async(req,res)=>{
  const id  = req.params.id;
  
  const result = await deleteBlogSpecific(id);
  
  res.send({deletedId:result._id})
})

app.patch("/api/v1/updateBlog/:id", async(req,res)=>{
  const blogId = req.params.id;
  const blog = req.body.blogs;
 
  const result = await updateBlog(blogId,blog);
  res.send({updatedId: result._id})
})

//comments api

app.post("/api/v1/comment", async(req,res)=>{
  const blogComment = req.body.comments;
  const result = await addblogsComment(blogComment);
  res.status(200).send({insertedId : result._id})
})

app.get("/api/v1/getblogsComment", async(req,res)=>{
  const result = await getblogsComment();
  res.send(result);
})

app.get("/api/v1/getblogsComment/:id", async(req,res)=>{
  const blogId = req.params.id;
 
  const result = await getSpeceficBlogComment(blogId);
  res.send(result);
})

app.delete("/api/v1/deleteComment/:id", async(req,res)=>{
  const commentId = req.params.id;
  
  const result = await deleteComment(commentId);
  res.send({deletedId: result._id})
})

app.patch("/api/v1/updateComment/:id", async(req,res)=>{
  const commentId = req.params.id;
  const comment = req.body.data;
  
  const result = await updateComment(commentId,comment);
  res.send({updatedId:result._id})
})

//favourite api


app.post("/api/v1/favourite", async(req,res)=>{
  const data = req.body.blog;
  
  const result = await addFavouriteBlog(data);
  res.status(200).send({insertedId:result._id});
})


app.get("/api/v1/favourite/:email", async(req,res)=>{
  const userEmail = req.params.email;
  const result = await  getFavouriteBlogs(userEmail);
  res.send(result);
})


app.delete("/api/v1/favouriteDelete/:id", async(req,res)=>{
 
  const id = req.params.id;
  const result = await  deleteBlogs(id);
 
  res.send({deletedId:result._id});
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})