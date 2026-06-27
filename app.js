const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
// let i = 0;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use((req,res,next)=>{ //middleware 
    next();
})

//Routes - 
app.get("/",(req,res)=>{
    res.send("Home page....")
})

app.post("/register",(req,res)=>{ap
    console.log(req.body);
    fs.appendFileSync("data.json", JSON.stringify(req.body), "utf-8")
    res.send("User registeration is completed.")
})

app.listen(port,()=>{
    // console.log(`Server is running at port no: ${port}`);
    console.log("server is started at", `http://localhost:${port}`);
})
//http://localhost:3000 

