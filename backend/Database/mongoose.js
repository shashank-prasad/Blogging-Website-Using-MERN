const mongoose=require('mongoose');

const PostData =require('./postsData');

mongoose.connect("<Mongo DB altas connection link>",
{ useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Connection Failed");
});

mongoose.set('useFindAndModify', false);


const createNewPost = async(req,res,next)=>{
    const createdPost= new PostData({
        title:req.body.title,
        author:req.body.author,
        body:req.body.body
    });

    console.log("New post added");
    const result=await createdPost.save();
    res.redirect('/manage');
    //res.json(result);
};


const getPostData = async(req,res,next)=>{
    const posts=await PostData.find().exec();
    res.json(posts);

};

const getOnePost=async(req,res,next)=>{
    let id= req.params.pid;
    const posts=await PostData.find({_id:id}).exec();
    res.json(posts);

};


const updatePost=async(req,res)=>{
    let postID=req.params.pid;
    // console.log("UPDATE");
    
    const {body }=req.body;
    const filter={_id:postID};
    const update={
        body:body
    };
    // console.log("UPDATE",update);
    let updatedPost= await PostData.findOneAndUpdate(filter,update);
    // console.log(updatedPost)
    res.redirect('/manage');

};


const deletePost=async(req,res,next)=>{
    let postID=req.params.pid;
    await PostData.findByIdAndDelete(postID);
    res.redirect('/manage');
}



exports.createNewPost=createNewPost;
exports.getPostData=getPostData;
exports.getOnePost=getOnePost;
exports.updatePost=updatePost;
exports.deletePost=deletePost;
