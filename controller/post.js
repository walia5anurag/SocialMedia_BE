const Post=require('../model/post')

/*=================Re-writing the getPosts for accesing posts from DB==================================

exports.getPosts=(req,res)=>{
    res.json({
        posts:[
            {title:'First Post'},
            {title:'Second Post'}
        ]
    })
}
========================================================================================================*/

exports.getPosts=(req,res)=>{
    const posts=Post.find().select("_id title body")
    .then(posts=>{
        res.json({postData:posts})
})
     .catch(err=>console.log(err))

}
/* re-writing this method after using express valdiator
exports.createPost=(req,res)=>{
    const post=new Post(req.body) //here we are extracting post from request body via. req.body
                                  // we are sending this req.body to Post mpdel that we have defined at ../model/post.js
    post.save((err,result)=>{            //save is use to save nteries into db each with a unqiue identifier
       if(err){
           return res.status(400).json({
        error:err
    })
}
else{
    res.status(200).json({
        post:result
    })
}
    })
}
*/
exports.createPost=(req,res)=>{
    const post=new Post(req.body)
    post.save().then(result=>{
        res.status(200).json({
            post:result
        })
    })
}
