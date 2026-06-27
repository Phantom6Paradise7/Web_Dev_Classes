const express = require("express")
const app = express();
const port = 3000

app.get("/", (req,res)=>{
    // res.send("Homepage is being viewed")
    res.json({
        "Name":"Lei Lee",
        "Game":"Tekken",
        "Company":"Namco"
    })
})

app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    res.send("Tekken 12 is about to release with Yujiro Hanma")
})
app.listen(port,()=>{
    console.log("Server is starting at", `http://localhost:${port}`);
})

