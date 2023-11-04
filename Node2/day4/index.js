const express = require("express");

const app = express();

app.get("/wapi",(req,res)=>{
   let data={
        bang:"89c",
        nsk:"65c",
        pune:"35c"
     }

     const {city} = req.query;
     res.send(`the temp at ${city} is ${data[city]}`)
})

app.listen(8080,()=>{
    console.log("server runnig at  port 8080");
})