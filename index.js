const express= require("express")
const coursesRouter=require("./routes/courses")
require("dotenv").config()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express()


app.use(bodyParser.json())
app.use("/api/v1/courses",coursesRouter);


// db connection
mongoose.connect(process.env.DB_URL,()=>{
    console.log("Connetion Successfull to db")
})

app.listen(process.env.PORT,()=>{
    console.log("server is running.......")
})