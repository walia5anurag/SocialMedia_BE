const Post=require('../model/post')
const jwt=require('jsonwebtoken')
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
    var authorization,decoded;
    if(req.headers && req.headers.authorization){
        
        authorization=req.headers.authorization.split(' ')[1];
    
        try{
            decoded=jwt.verify(authorization,process.env.JWT_SECRET)
         
        }
        catch(e){console.log("erorr",e)
            res.status(401).send('unauthorized')
        }
   
        const userId=decoded.id;
        Post.find({userId},(err,result)=>{
            //find returns array of all result all at once while findOne keep on sending the result when he encounters it
            
             if(err||!result){
                 return res.status(400).json({
                     error:'No Record found!'
                 })
             }
             return res.status(200).json({
                        postData:result
                    })
            })
            return res.status(500)
    }
}


    /* Earlier this logic was used when id through params was sent
    const userId=req.query
 

    Post.find({userId:req.query.userId},(err,result)=>{
       //find returns array of all result all at once while findOne keep on sending the result when he encounters it
       
        if(err||!result){
            return res.status(400).json({
                error:'No Record found!'
            })
        }
      
     
        //So as to make the response array
        return res.status(200).json({
            postData:result
        })
    })

}
*/
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
