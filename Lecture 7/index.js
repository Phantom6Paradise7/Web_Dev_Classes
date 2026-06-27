const express = require("express")
const app = express();
const port = 3001;

app.get("/", (req, res)=>{
    res.send("Homepage is being viewed.")
})
app.get("/name", (req,res)=>{
    console.log(req.url);
    res.send("Hi everyone");
})
app.listen(port,()=>{
    console.log("Server started at", `http://localhost:${port}`);
});