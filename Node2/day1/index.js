const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("Hello form middleware");
    next()
})


app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})

app.get("/about",(req,res)=>{
    res.send("about PAGE");
})

app.get("/contact",(req,res)=>{
    res.send("contact PAGE");
})

app.get("/data",(req,res)=>{
    res.send("data PAGE");
})


app.listen(8080,()=>{
    console.log("listening on port 8080");
})