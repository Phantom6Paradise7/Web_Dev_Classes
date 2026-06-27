// const express = require("express");
// const mongoose = require("mongoose");
// const ejs = require("ejs");
// const port = 3000;
// const app = express();

// // Setting EJS as view engine
// app.set("view engine", "ejs");

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/student")
//   .then(() => {
//     console.log("MongoDB localhost connected");
//   })
//   .catch((err) => {
//     console.log("MongoDB Connection Error:", err);
//   });

// // Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   course: String,
//   cgpa: Number,
// });

// // Model
// // Third parameter specifies the exact collection name in MongoDB
// const Student = mongoose.model("Student", userSchema, "Student");

// // Home Route
// app.get("/", async (req, res) => {
//   try {
//     const allFaculty = await Student.find();

//     console.log("Students Found:");
//     console.log(allFaculty);
    

//     // Render faculty.ejs from views folder
//     res.render("faculty", {
//       allFaculty: allFaculty,
//     });

//     // If you want JSON instead of EJS, use this:
//     // res.status(200).json(allFaculty);
//   } catch (err) {
//     console.log("Error fetching students:", err);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch students",
//       error: err.message,
//     });
//   }
// });

// // Server
// app.listen(port, () => {
//   console.log(`Server is ruuning at http://localhost:${port}`);
// });