const express = require('express');
const cors = require("cors");
const { default: mongoose } = require('mongoose');
const { createUser, getUser } = require('./Api controller/userController/userController');
const { createBlog, getBlogs, getSingleBlog } = require('./Api controller/blogController/blogController');
const { addblogsComment, getblogsComment, getSpeceficBlogComment } = require('./Api controller/commentControler/commentController');

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
    console.log(userData);
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
  console.log(blogData);
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
  console.log(blogId);
  const result = await getSpeceficBlogComment(blogId);
  res.send(result);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})