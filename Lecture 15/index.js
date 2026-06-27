// const express = require("express")
// const dotenv = require("dotenv")
// const app = express();
// dotenv.config();
// // const port = process.env;
// const PORT = process.env.PORT;

// console.log(PORT);

// app.listen(PORT, ()=>{
//     console.log(`Server is running on http://localhost:${PORT}`)
// })


const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// const PORT = process.env;
const PORT = process.env.PORT;
const userRoute = require("./routes/userRoute")
const cookieParser = require("cookie-parser")
app.use(cookieParser());

// app.use("/user", userRoute);
app.get("/", (req, res) => {
    res.cookie("Username",  "Joseph0989");
    res.send("Homepage....")
})

app.get("/payment", (req,res)=>{
    console.log(req.cookies);
    res.send("Payment page ....")
})
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})