const express = require("express")
// const ejs = require("ejs")
// const mongoose = require("mongoose")
const app = express();
const app = require("./middlewares/log.js");
const gold = require("./middlewares/gold.js");
const connectDB = require("./config/db.js");
const route = require("./routes/gigRouter.js")
const port = 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(log)
app.use("/gold", gold);

// app.get("/", (req,res)=>{
//     res.send("The webpage is being being rendered.")
// })

app.listen(port, ()=>{
    console.log(`Server is running on http://localport:${port}`)
})

