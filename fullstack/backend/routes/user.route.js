
const express=require("express")

const {UserModel}=require("../models/user.model")

const jwt=require("jsonwebtoken")

const bcrypt=require("bcrypt")

const userRouter=express.Router()


userRouter.post("/register",async(req,res)=>{
    const {name,age,email,pass}=req.body
    try{
     bcrypt.hash(pass,5, async(err,hash)=>{
     if(err) res.send({"msg":"something went wrong","error":err.message})
     else{
        const user=new UserModel({name,age,email,pass:hash})
        await user.save()
        res.send({"msg":"New user has been registered"})
    }
     })    
    }catch(err){
    res.send({"msg":"Something went wrong","error":err.message})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email}=req.body
    try{
    const user=await UserModel.find({email})
    if(user.length>0){
        bcrypt.compare(pass, user[0].pass, (err,result)=>{
            if(result){
                let token=jwt.sign({userID:user[0]._id},"masai")
                res.send({"msg":"New user has been logged in","token":token})
            }else{
           res.send({"msg":"Wrong credentials"})
        }
        })
     }else{
        res.send({"msg":"Wrong credentials"})
     }
    }catch(e){
        res.send({"msg":"Something went wrong","error":e.message})    
 }
})


module.exports={
    userRouter
}