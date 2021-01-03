const mongoose = require("mongoose");
let uuidv1=require('uuidv1')
const crypto=require('crypto')

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    hashed_password:{
        type:String,
        required:true
    },
    salt:String,
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date

})

//Virtual field for hasing the password
userSchema.virtual("password")
    .set(function(password){
        //create a temporary variable called password!
        this._password=password
        //generating timestamp
        this.salt=uuidv1()
        this.hashed_password=this.encryptPassword(password)
    })
    .get(function(){
        return this._password
    })
userSchema.methods={

    authenticate :function(password){
        return this.encryptPassword(password)===this.hashed_password
    },
    encryptPassword:function(password){
        if(!password) return "Psst! Password is null!"
        try{
            return crypto.createHmac('sha1',this.salt)
                         .update(password)
                         .digest('Hex')
        }
        catch(err){
            return "An Error has Occured while encryption, please try again after re-loading"
        }
    }

}
module.exports=mongoose.model("User",userSchema)