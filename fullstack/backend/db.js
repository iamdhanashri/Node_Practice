
const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://dhanashri:ahire@cluster0.1t4wpeq.mongodb.net/keepsapp")

module.exports={
    connection
}