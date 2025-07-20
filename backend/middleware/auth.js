import e from "express";
import JWT from "jsonwebtoken";

const authUser = async (req, res, next) => {

    const { tokenoken } = req.headers;
    if (!token){
        res.json({success:false, message: "not authorized login again"})
    }

    try {
        
const token_decode = JWT.verify(token, process.env.JWT_SECRET);
 req.body = token_decode.id
        next();

    } catch (error) {
console.log(error);
        res.json({success:false, message: "token expired login again"})
        
    }


}

export default authUser;