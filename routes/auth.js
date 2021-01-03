const express=require('express')
const userAuth=require('../controller/auth')
const {userSignupValidator} = require('../validator/index')
const {userById}=require('../controller/user')
const router=express.Router()

router.post('/signup',userSignupValidator,userAuth.signup)
router.post('/signin',userAuth.signin)
router.post('/signout',userAuth.signOut)

router.param("userId",userById)

module.exports=router
