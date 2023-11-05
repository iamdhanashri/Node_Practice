const mongoose = require("mongoose");

const main = async()=>{
try{
    const connection =await mongoose.connect("mongodb://127.0.0.1:27017/ahire");
    console.log("connnected to mongoose")
    await StuModel.insertMany([{name:"hem",age:26,edu:"B.E.",loc:"NSK"}])
    console.log("Data inserted successfully")
   
    // to read data 
    const students= await StuModel.find()
    console.log(students)

    connection.disconnect()
    console.log("disconnected")
}
catch(err){
    console.log(err)
}
}

main()

// creating schema & model(structure of data) 
const stuSchema=mongoose.Schema({
    name:String,
    age:Number,
    edu:String,
    loc:String
})

const StuModel=mongoose.model("stu",stuSchema)



