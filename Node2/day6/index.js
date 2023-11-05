const express = require("express");
const {connection} = require("./db")


const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.get("/users",(req,res)=>{
    res.send("all users data")
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("users will be registered")
})

app.listen(8080,async()=>{
    try{
        await connection
        console.log("conneted to db")
    }
    catch(err){
        console.log("not conneted to db")
        console.log(err)
    }
    console.log("listening to port 8080");
})