// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// app.set('view engine', 'ejs');

// // mongoose.connect("mongodb://127.0.0.1:3000/Hi-tech")

// mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
// .then(() =>console.log("College DB Connected"))
// .catch(err =>console.log(err));

// //schema of students
// const studentsSchema = new mongoose.Schema({
//     name:"String",
//     age:Number,
//     course:"String"
// },{ versionKey: false })
// //model
// const student = mongoose.model("student",studentsSchema);
// // console.log(Student);




// app.get("/",async(req,res)=>{
//     //async task, await..
//     let allStudent = await student.find();
//     console.log(allStudent);
    
//     let obj ={
//         "name":"Mayank",
//         age :25,
//         course : "Btech"
//     };
//     //res.send("home page");
//     // res.send(allStudent);
//     res.render("students.ejs",{allStudent});

// }) 

// app.post("/createdata", async (req,res)=>{
//     let obj = {
//         name : "Lao",
//         age : 19,
//         course : "Btech"
//     }
//     console.log(res.body)
//     let data = await student.create(obj);
//     console.log(obj);
//     res.send("Data is send")
    
// })

// app.listen(3000,()=>{
//     console.log("Server is running...");
    
// })