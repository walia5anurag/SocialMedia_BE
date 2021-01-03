const User=require('../model/users')
const jwt=require('jsonwebtoken')
const express_jwt=require('express-jwt')
require('dotenv').config()
exports.signup= async (req,res)=>{
    const userExist=await User.findOne({email:req.body.email})   //we are making database call to fetch that user email which has this email
    if(userExist)
        return res.status(403).json({error:'Email is already taken!'})
    const userCred=await new User(req.body)
    await userCred.save()
    res.status(200).json({
            message:"Your,account is created, Now login to access your account"
    })

}

exports.signin=(req,res)=>{
    const {email,password}=req.body
    console.log(req.body)
    User.findOne({email},(err,userResult)=>{
        console.log("this is result from db",!userResult)
        if(err||!userResult){
            return res.status(400).json({
                error:'User does not exist! Please signup to create your account'
            })
        }
        if(!userResult.authenticate(password)){

            return res.status(401).json({
                error:'Password you have entered is incorrect'
            })
        }
        //generate toek with userid and secret key
        const token=jwt.sign({id:userResult._id},process.env.JWT_SECRET)
        //persisting the token with cookie with expire time
        res.cookie("t",token,{expire:new Date()+9999})

        //return response with user name and token
        const {_id,name,emailId}=userResult
        return res.status(200).json({
            token:token,
            user:{
              _id,
                emailId,
                name
            }
        })
    })
}

exports.signOut=async(req,res)=>{
      res.clearCookie('t')
    res.json({
        message:'Successfully signed out!'
    })
}

exports.protectingRoutes = express_jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
  });
