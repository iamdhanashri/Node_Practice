const express = require("express");
const fs=require("fs")

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.end("<h1>HOME PAGE</h1>")
})

app.get("/data",(req,res)=>{
    const dataStream=fs.createReadStream("./data.json","utf-8")
    dataStream.pipe(res)
})

app.get("/student",(req,res)=>{
    const data = fs.readFileSync("./data.json","utf-8")
    const parseData = JSON.parse(data);
    res.send(parseData.student);
})

app.get("/teacher",(req,res)=>{
    const data = fs.readFileSync("./data.json","utf-8")
    const parseData = JSON.parse(data);
    res.send(parseData.teacher);
})

app.post("/addData",(req,res)=>{
    console.log(req.body)
    res.send("data is stored")
})

app.post("/addstuent",(req,res)=>{
//step1:get the complete data
const data = fs.readFileSync("./data.json","utf-8");
//step2: parse to add the data
const parseData = JSON.parse(data)
//step3:add the data in student
parseData.student.push(req.body)
//step4:adding data to the file
 fs.writeFileSync("./data.json",JSON.stringify(parseData));
res.send("Data has been entered")
})


app.delete("/deletestuent",(req,res)=>{
    //step1:get the complete data
    const data = fs.readFileSync("./data.json","utf-8");
    //step2: parse to add the data
    const parseData = JSON.parse(data)

    const newStudentData = parseData.student.filter((ele)=>{
        return ele.name!=="Dhanashri"
    })
   console.log(newStudentData)
    res.send("hvjfd")
})


app.listen(4200,()=>{
    console.log("server running at port 4200");

})