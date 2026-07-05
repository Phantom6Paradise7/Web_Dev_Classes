// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// app.set('view engine', 'ejs');
// // app.use(express.)
// // mongoose.connect("mongodb://127.0.0.1:3000/Hi-tech")
// app.use(express.json()); //for JSON data parsing
// app.use(express.urlencoded({ extended: true })); // for application

// // mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
// mongoose.connect("mongodb+srv://rajputmayank_db:.....")
//     .then(() => console.log("College DB Connected"))
//     .catch(err => console.log(err));

// //schema of students
// const studentsSchema = new mongoose.Schema({
//     // name: "String",
//     // age: Number,
//     // roll: Number,
//     // email: "String"
//     name:{
//         type:String,
//         required:true,
//         minlength:3,

//     },
//     age:{
//         type :Number,
//         min:18,
//         required:false
//     },
//     email:{
//         type:String,
//         minlength:4,
//         required:true
//     }

// })
// //model
// const student = mongoose.model("students", studentsSchema);
// // console.log(Student);




// app.get("/", async (req, res) => {
//     //async task, await..
//     let allStudent = await student.find();
//     console.log(allStudent);

//     let obj = {
//         "name": "Mayank",
//         age: 25
//     };
//     //res.send("home page");
//     // res.send(allStudent);
//     res.render("students.ejs", { allStudent });

// })

// app.get("/insertdata", (req, res) => {
//     res.render("form.ejs");
// })

// app.post("/createdata", async (req, res) => {
//     let obj = {
//         name: "mayank_ji",
//         age: 20,
//         roll: 55
//     }
//     let data = await student.create(req.body);
//     console.log(data);
//     res.send("data created..")

// })

// app.listen(3000, () => {
//     console.log("Server is running...");

// })
