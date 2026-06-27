const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
// let i = 0;

//Creating routes
app.use("/public/2 Public", express.static("public"));
app.use("/Assets", express.static("Assets"));
app.use((req,res,next)=>{ //middleware 
    // i++;
    // const timestamp = new Date();
    // console.log(timestamp);
    // const log = `Client Data = ${timestamp}, ${i}, ${req.ip}, ${req.url} \n`
    // fs.appendFileSync("log.txt",log,"utf-8");
    next();
})

//Routes - 
app.get("/",(req,res)=>{
    res.send("Home page....")
})

app.post("/register",(req,res)=>{
    res.send("User registeration is completed.")
})

app.listen(port,()=>{
    // console.log(`Server is running at port no: ${port}`);
    console.log("server is started at", `http://localhost:${port}`);
})
//http://localhost:3000 

