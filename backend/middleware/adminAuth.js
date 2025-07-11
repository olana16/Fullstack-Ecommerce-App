import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
   try {

    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:"token not found"})
    }

    const token_decode = jwt.verify(token,process.env.JWT_SECCRETE);
    if(token_decode !== process.env.EMAIL + process.env.PASSWORD){
        return res.json({success:false, message:"you are not admin"})
    }
    next();    
   } catch (error) {
    
   }
}
export default adminAuth;