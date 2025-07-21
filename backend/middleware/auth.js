import e from "express";
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {

    const { token } = req.headers;
    if (!token) {
        res.json({ success: false, message: "not authorized login again" })
    }

    try {

        const token_decode = jwt.verify(token,process.env.JWT_SECCRETE);
        req.body.userId = token_decode.id
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "token expired login again" })

    }


}

export default authUser;