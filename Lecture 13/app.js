const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs")

mongoose.connect("mongodb://127.0.0.1:27017/Hitech")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log("error aa gaya"))

const studentSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true,
       minlength:3

    },
    age:{
       type:Number,
       required:false,
       min:18
    },
    // course:{
    //     type:String,
    //     minlength:4,
    //     required:true
    // }
    // Address_ID:{
    //     type : Number,
    //     require : true
    // }
})

// model 
const Student = mongoose.model("students",studentSchema);

app.get("/getdata",async(req,res)=>{
    let allstudent = await Student.find();
    console.log(allstudent);

    res.render("students.ejs",{allstudent})

})

app.get("/",(req,res)=>{
    
    res.render("home.ejs")

})

app.get("/test", async (req,res)=>{
    // let data = await Student.findOne({name : "hsjsjka"}); // used to find a particular client
    // let data = await Student.updateMany({name : "hsjsjka"}, {name : "lb"}) //for updating multiple clients to a different name or other attribute and getting the count of it.
    // let data = await Student.updateOne({name : "lb"}, {name : "Beth"}) //to update only one user
    // let data = await Student.deleteOne({name : "lghcgvhjqdx"})

    console.log(data);
    res.send("bYE TESTING IS DONE")
})
// to get data from form post and saved it on DB
app.get("/delete/:userid", async (req,res)=>{
    console.log(req.params.userid);
    let deldata = await Student.findByIdAndDelete(req.params.userid)
    res.redirect("/getdata");
})

app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})

app.get("/edit/:userid", async (req, res)=>{
    let data = await Student.findById(req.params.userid);
    res.render("edit.ejs", {data});

    res.redirect("/getdata")
})

app.post("/update/:userid", async (req,res)=>{
    let data = await Student.findByIdAndUpdate(req.params.userid, res.body, {new:true})
    res.redirect("/getdata");
})
// saving pot data to DB using create 
app.post("/createdata",async(req,res)=>{
    req.body.ip = req.ip
    console.log(req.body);
    let data = await Student.create(req.body);
    console.log(data);
    // res.send("Data saved");
    res.redirect("/getdata")
})


app.listen(port,()=>{
    console.log("Server live at port 4000...");
    
})

