const express = require("express")
const app = express();
const port = 3001

app.get("/", (req,res)=>{
res.json({
        "Name":"Lei Lee",
        "Game":"Tekken",
        "Company":"Namco"
    })
})

app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    console.log(req.params.roll)
    res.send(`Tekken 12 is about to release with Yujiro Hanma, till then check out ${req.params.roll}`)
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("Data is unavailable.")
})

app.listen(port,()=>{
    console.log("Server is starting at", `http://localhost:${port}`);
})

