import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRoute from './route/userRoute.js'

//App config

const app= express()
const port= process.env.PORT || 3400
   connectDB()
connectCloudinary()


//middleware

app.use(express.json())
app.use(cors())

//api end point
app.use("/api/user", userRoute)

app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>console.log('Sever Started on port:'+port))