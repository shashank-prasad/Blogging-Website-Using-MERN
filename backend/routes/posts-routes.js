const express= require('express');

const mongoPractice= require('../Database/mongoose');

const router=express.Router();

 


// router.get('/',(req,res,next)=>{
//    console.log("GET Request in posts");
//     res.json({posts:posts});
// });

router.get('/',mongoPractice.getPostData);


// router.get('/:pid',(req,res,next)=>{
//     let postID=req.params.pid;
//      console.log(postID)
//     // console.log(posts[postID].id)



//     const place=posts.find(p=>{
//         return p.id==postID;
//     });

//   if (!place) {
//     const error = new Error('Could not find a Post for the provided id.');
//     error.code = 404;
//     throw error;
//   }

//     res.json({place})

// });

router.get('/:pid',mongoPractice.getOnePost);



module.exports=router;