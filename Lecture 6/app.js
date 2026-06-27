// //setup express
// //public folder serve karna h index.html (form)
// //post route bnana h/ register par data ayega
// //req.body -> append karna hai data.json ke ander

const express = require("express")
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/",express.static("public"))
app.use((req, res, next)=>{
    next();
})

app.get("/",(req,res)=>{
    res.send("Homepage...")
})
app.post("/register", (req, res)=>{
    res.send("User registeration is completed.")
    console.log(req.body);
    let log = req.body;
    // fs.appendFileSync("data.json", JSON.stringify(log)+"\n","utf-8"); - to append in JSON file
    const data=` client data= ${req.url}, ${req.ip} , ${req.ip} \n`;
    fs.appendFileSync("log.txt",data,"utf-8");
    // res.sendfile("Meme1.mp4",{root : "."})
    res.send("registeration complete")
})
app.listen(port,()=>{
        console.log("server is started at", `http://localhost:${port}`); 
})



// const express = require("express");
// const app = express();
// const port = 3000;
// const fs = require("fs");

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use("/",express.static("public"));


// app.get("/", (req, res) => {
//   res.send("home page....");
// });
// app.post("/register",(req,res)=>{
//     const c_data = `${req.ip}`;
//     res.send("registeration completed")
// })

// app.use((req, res, next) => {
//     const data=` clinet data= ${req.url}, ${req.ip} , ${req.ip} \n`;
//     fs.appendFileSync("log.txt",data,"utf-8");
//   next();
// });

// app.listen(port, () => {
//     console.log("server is started at", `http://localhost:${port}`); 
// });