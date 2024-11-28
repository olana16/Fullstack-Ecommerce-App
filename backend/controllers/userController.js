

import validator from "validator"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECCRETE)
}


// Routes for login user

const loginUser = async (req, res) => {

}

// Routes for Register user

const registerUser = async (req, res) => {


    try {

        const { name, email, password } = req.body

        // cheacking user exsist
        const exist = await userModel.findOne({ email })

        if (exist) {


            return res.json({ success: false, message: "user already exist" })
        }
        if(!validator.isEmail(email)){

            return res.json({ success: false, message: "please enter valid email" })

        }
        if(password.length < 8){

            return res.json({ success: false, message: "please enter strong password" })

        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        }) 

        const user= await newUser.save()

        const token= createToken(user._id)

        res.json({success:true,token})

    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})

    }

}

// Routes for addmin login

const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }