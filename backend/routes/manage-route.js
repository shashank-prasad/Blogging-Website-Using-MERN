const express= require('express');

const mongoPractice= require('../Database/mongoose');


const router=express.Router();



router.get('/',mongoPractice.getPostData);

router.get('/:pid',mongoPractice.getOnePost);

router.post('/edit/:pid',mongoPractice.updatePost);

// router.post('/edit/:pid',mongoPractice.updatePost);


router.get('/delete/:pid',mongoPractice.deletePost);






module.exports=router;