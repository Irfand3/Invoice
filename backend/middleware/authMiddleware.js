import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import pool from "../config/db.js";

const protectRoute = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization)
    {
        try {
            token = req.headers.authorization.split(' ')[1]
            //console.log(token)
            const decoded = jwt.verify(token,"abc")
            console.log(decoded)
            const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [decoded.id])
            console.log(user.rows[0])
            req.user = user.rows[0]
            next()
        } catch (error) {
            console.error(error)
            res.status(401).json({msg: "Token is not valid"})
        }
    }
    if(!token)
    {
        res.status(401).json({msg:"No token"})
    }
    
    
})

export { protectRoute }