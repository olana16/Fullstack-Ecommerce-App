import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRoute from './route/userRoute.js'
import productRoute from './route/productRoute.js'
import cartRouter from './route/cartRoute.js';
import orderRouter from './route/oredrRouter.js'

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
app.use("/api/product/", productRoute)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>console.log('Sever Started on port:'+port))