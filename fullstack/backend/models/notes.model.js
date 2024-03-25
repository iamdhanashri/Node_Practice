const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    title:String,
    body:Number,
    auther:String 
})

const NoteModel=mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}