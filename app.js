const express=require('express')
const expressValidator=require('express-validator')
const morgan=require('morgan')
const mongoose=require('mongoose')
const postRoutes=require('./routes/posts')
const auth=require('./routes/auth')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
var cors = require("cors");
dotenv.config()

//DB
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true,useUnifiedTopology: true  },
  
    )
.then(()=>console.log("SUCESSFUL conection with DB"))

mongoose.connection.on('error',err=>{
    console.log(`DB connection err : ${err}`)
})
const app=express()
//middleware
app.use(morgan("dev"))
app.use(expressValidator()) //validations middleware
app.use(bodyParser.json())  //any incoming body request will be parsed into jason
app.use(cookieParser())
app.use(cors());
/* we can even use our own middle ware as well 

const customMiddleware=(req,res,next)=>{
    console.log('THis is a custom response')
    next()
}
app.use(customMiddleware)

middleware can be use to give access to a route only after authentication,
app.get("/",customMiddleware,post.getPosts)  -->this way before accessing getposts function, customMiddleware is 
                                                    accessed which can be furthur used for authentication.

*/
/* Now this app.get not to be used here instead app.use is to be used as post is now a middleware!
//accessing routes

app.get("/",post.getPosts)

*/
app.use("/",postRoutes)
app.use("/",auth)
app.use(function(err,req,res,next){           
    if(err.name==='UnauthorizedError'){
        res.status(401).json({error:"Oyi! You are not authorized to access this url"})
    }
    next()
})

//server started listening
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Node js api listening on port : ${port}`)
})