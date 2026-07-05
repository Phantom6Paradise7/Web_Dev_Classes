const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
mongoose.connect("mongodb+srv://mansabhatt62587_db_user:Paasword:cluster7.klfzxyk.mongodb.net/")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));

app.get("/", (req,res)=>{
    console.log(req.param);
    res.json({
        "Name" : "Vikas Patel",
        "College" : "Kanpur University",
        "Age" : 25
    })
})

app.listen(port,()=>{
    console.log("Server is starting at", `http://localhost:${port}`);
}
)
