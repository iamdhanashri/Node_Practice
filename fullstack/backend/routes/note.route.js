const express=require("express")
const { NoteModel } = require("../models/notes.model")

const noteRouter=express.Router()

// getting all d notes of all users 

noteRouter.get("/",async(req,res)=>{
    const notes=await NoteModel.find()
    res.send(notes)
})


// only getting d notes of perticular(single) user 

noteRouter.get("/",async(req,res)=>{
    const notes=await NoteModel.find({user})
    res.send(notes)
})


noteRouter.post("/create",async(req,res)=>{
    const payload=req.body
    const note=new NoteModel(payload)
    await note.save()
    res.send({"msg":"Note created successfully"})
})

noteRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    await NoteModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`Note with id:${noteID} has been deleted`})
})

noteRouter.patch("/update/:id",(req,res)=>{
    res.send("note updated successfully")
})

module.exports={
    noteRouter
}