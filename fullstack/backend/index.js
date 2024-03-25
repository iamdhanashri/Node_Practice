const express=require("express")
const { connection } = require("mongoose")

const {userRouter}=require("./routes/user.route.js")

const {authenticate}=require("./middleware/authenticate.middleware.js")

const {noteRouter}=require("./routes/note.route.js") 
const cors=require("cors")



const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.send("home page")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)

app.listen(8080,async()=>{
    try{
    await connection
    console.log("connected to DB")
    }catch(e){
    console.log(e.message)
    }
    console.log("listenning at port 8080")
})