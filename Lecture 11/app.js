// const express = require("express")
// const app = express();
// // const ejs = require("ejs")
// const mongoose = require("mongoose")
// const port = 3000;


// mongoose.connect("mongodb://127.0.0.1:27017/Hitech")
// .then(() =>console.log("DB Connected"))
// .catch(err =>console.log(err));

// //Schema of students
// const studentschema = new mongoose.Schema({
//     Name : String,
//     Age : Number,
//     Course : String
// })

// // Model
// const students = mongoose.model("Student", studentschema);

// app.get("/", async (req,res)=>{
//     // console.log("Error occuring, Please connect to the Database")
//     //async task is happening and thus we are awaiting 
//         let allstudents = await students.find();
//         console.log(allstudents)
//     let obj = {
//         Name : "Jo",
//         Age : 23,
//         Course : "Btech"
//     }
//     // res.send("Homepage is connected.")
//     res.send(obj);
// })

//  app.listen(3000,()=>{
//     console.log(`Server is starting at http://localhost:${port}`)
//  })

