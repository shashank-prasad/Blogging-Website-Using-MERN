const express= require('express');
const bodyParser=require('body-parser');

const postRoutes=require('./routes/posts-routes');
const managePostRoutes=require('./routes/manage-route');
const newPostRoutes=require("./routes/newPost-route");


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin , X-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",'GET','POST');
  next();
});

app.use("/posts",postRoutes);
app.use('/manage',managePostRoutes);
app.use('/new',newPostRoutes);



app.get('/',(req,res)=>{
    res.send("<h1>HELLO its me Node.js</h1>");
});



app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });
  

app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
});