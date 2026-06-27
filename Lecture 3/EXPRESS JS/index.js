const express = require("express");
const app = express();
let port = 3000;

// The route is set strictly to the root path '/'
app.get('/', (req, res) => {
    console.log("A user is detected on the homepage");
    res.send("Data is sent successfully.");
});

app.get('/about',(req, res) =>{
    console.log("Hi, Dear User, Welcome to our server.")
});

app.all("/about", (req, res) =>{
    console.log("Aborting Server.");
    res.send("Try again later.")
})
app.get("*", (req, res) =>{
    res.send("Get resquest ke path meine error hai.")
});

app.listen(port, () => {
    console.log(`App is running on the port ${port}`);
});
//let app = require("express";)
//console.log(app) - gives the output as the entire stuff
//console.log(typeof(app)) - gives the output as function
//http://localhost:3000/