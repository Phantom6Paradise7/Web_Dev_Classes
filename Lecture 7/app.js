const express = require("express")
const app = express();
const port = 3000;

app.set("view engine", "ejs");

let Dipesh = {
    Name:"John Wick",
    Occupation : "Assassin",
    Age : "41",
    
};

let Color = {
    Name: "Turquoise",
    Exincommonlife : "Sky"
}
let Book = "Lord of the Mysteries";
app.get("/", (req, res)=>{
    res.render("User", {Dipesh, Book, Color})
})
app.listen(port,()=>{
    console.log("Server started at", `http://localhost:${port}`);
});