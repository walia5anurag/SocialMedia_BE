const express=require('express')
const postController=require('../controller/post')
const {protectingRoutes}=require('../controller/auth')
const {userById}=require('../controller/user')
const validator=require('../validator/index')
const router=express.Router()

router.get('/',protectingRoutes,postController.getPosts)
router.post('/post',protectingRoutes,validator.createPostValidator,postController.createPost)

router.param("userId",userById)
module.exports=router

/*
Basically now due to using this router our post.js of router will now be a
middleware file before accesing any route

exports.getPosts=(req,res)=>{
    // we can not use it like this :controllerFunc.getPosts()
    // we need to bring in express as well here

}
*/

// instead of exports ={ getPosts} way of exporting
