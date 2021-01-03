exports.createPostValidator=(req,res,next)=>{
    req.check('title','write a title').notEmpty()
    req.check('title','Title is short, must be between 4 and 150 characters').isLength({
        min:4,max:150
    })
    req.check('body','write a title').notEmpty()
    req.check('body','Title is short, must be between 4 and 150 characters').isLength({
        min:4,max:2000
    })

    //multiple error handling with express validator
    const error=req.validationErrors()
    if(error){
        const firstError=error.map(err=>err.msg)[0]
        return res.status(400).json({error:firstError})
    }
    //proceed to next middleware
    next();
}


exports.userSignupValidator=(req,res,next)=>{
    req.check("name","Name is required").notEmpty()
    req.check("email","Email you entered is not valid")
        .matches(/.+\@.+\..+/)        //Regex pattern to detect if email entered in correct format
        .isLength({min:4,
        max:50})
    req.check('password').isLength({min:6})
        .withMessage("Password must conatin atleast 6 characters")
        .matches(/\d/)
        .withMessage("Must contain a number")
    const error=req.validationErrors()
    const errorsGroup=[];
    if(error){
        error.forEach((item)=>{
            errorsGroup.push(item)
        })

        return res.status(400).json({error:errorsGroup})
      
    }
    next();

}
