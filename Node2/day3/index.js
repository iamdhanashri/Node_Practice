
const express=require("express")
const fs=require("fs")

const app = express();

app.use((req,res,next)=>{
    next();
    const end = new Date().getTime();
    console.log(` it takes ${end-start}ms times`)
})

// find out all hitted routes with it's respose time 
const routeLogger=(req,res,next)=>{
   const start = new Date().getTime();
   next();
   const end = new Date().getTime();
   fs.appendFileSync("./routes.text",`Route visited:${req.url} | Method:${req.method} | Response Time:${end-start}ms\n`)
}

app.use(routeLogger)


app.get("/",(req,res)=>{
    console.log("Homepage");
    res.send("Home Page")
})

app.get("/about",(req,res)=>{
    console.log("about page")
    res.send("About Page")
})

app.get("/contact",(req,res)=>{
    res.send("contact Page")
})

app.get("/data",(req,res)=>{
    res.send("data Page")
})

app.listen(8080,()=>{
console.log("server runnig at port 8080");
})

