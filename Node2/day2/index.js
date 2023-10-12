
const express=require("express")

const app=express();

app.use((req,res,next)=>{
    console.log("hello from middleware")
    next()
})


app.get("/",(req,res)=>{
    console.log("home page")
    res.send("HOME PAGE")
})

app.listen(8080,()=>{
    console.log("listening at port 8080")
})