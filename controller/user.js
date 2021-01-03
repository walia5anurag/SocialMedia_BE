const User=require('../model/users')

exports.userById=(req,res,next,id)=>{

    User.findById(id).exec((err,user)=>{
    if(err||!user){
        return res.status(401).json({
            error:'User is not found!'
        })
    }
    req.profile=user     //adding profile object in request body
})
}