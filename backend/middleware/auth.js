import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const { token } = req.headers;
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: "Authorization token missing. Please log in again" 
        });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECCRETE);
        req.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ 
            success: false, 
            message: "Invalid or expired token. Please log in again" 
        });
    }
}

export default authUser;