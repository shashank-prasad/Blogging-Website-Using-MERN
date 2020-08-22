const express= require('express');

const mongoPractice= require('../Database/mongoose');

const router=express.Router();

// router.post('/',(req,res,)=>{


//     const { title,author,body}=req.body;
//     const newPost={
//         title,
//         author,
//         body
//     };
//     console.log(newPost);
//     //NEW ENTRY QUERY

//     res.status(201)
//     res.json({post:newPost});
// });

router.post('/',mongoPractice.createNewPost)

module.exports=router;