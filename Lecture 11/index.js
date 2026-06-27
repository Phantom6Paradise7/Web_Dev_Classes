const express = require("express");
const mongoose = require("mongoose");
const app = express();



// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => {
    console.log("MongoDB localhost connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  course: String,
  cgpa: Number,
});

// Model
// Third parameter specifies the exact collection name in MongoDB
const Student = mongoose.model("Student", userSchema, "Student");

// Home Route
app.get("/", async (req, res) => {
  try {
    const allStudents = await Student.find();

    console.log("Students Found:");
    console.log(allStudents);
    
    res.status(200).json(allStudents);
  } catch (err) {
    console.log("Error fetching students:", err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch students",
      error: err.message,
    });
  }
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});