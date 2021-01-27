import express from "express"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import {protectRoute} from "../middleware/authMiddleware.js"
import pool from "../config/db.js"
import bcrypt from "bcrypt"

const router = express.Router()

const generateToken = (id) => {
    return jwt.sign({id}, "abc", {
        expiresIn: '30d'
    })
}

router.post('/register', asyncHandler(async(req, res)=>
 {
    const {email, name, password} = req.body
    console.log(req.body)
  
     const userExists = await pool.query('SELECT * FROM users WHERE user_email = $1', 
    [email])
    
    if(userExists.rows[0]){
        res.status(400).json({message: "User Email Already in use!"})
    }

    const salt = await bcrypt.genSalt(5)
    const bcryptPassword = await bcrypt.hash(password, salt)

    const user = await pool.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', 
    [name, email, bcryptPassword])

    if(user){
        res.status(201).json({
            _id:user.rows[0]._user_id,
            name: user.rows[0].user_name,
            email: user.rows[0].user_email,
            token: generateToken(user.rows[0].user_id),
            message: "User Successfuly created!"
        },
        )
    
    } 
    
}))

router.post('/login', asyncHandler(async(req, res) => {
    const {email, password} = req.body
    console.log(req.body)
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email])
    
    if (user.rows[0]) {
    
            const decryptPassword = await bcrypt.compare(
                password,
                user.rows[0].user_password
              );

              if (decryptPassword) {
                  res.json({
                      user_id:user.rows[0].user_id,
                      user_name:user.rows[0].user_name,
                      user_email:user.rows[0].user_email,
                      token:generateToken(user.rows[0].user_id)
                  })
              }
              else
              res.status(401).json({message: "Invalid Email or Password"})
        }
    
     else if(!user.rows[0]){
        res.status(401).json({message: "Invalid Email or Password"})  
    } 
    
}))

router.get('/loggedUser', protectRoute, asyncHandler(async (req, res) => {

    const user = await pool.query('SELECT user_id,user_name, user_email FROM users WHERE user_id = $1', [req.user.user_id])
    const userRow = user.rows[0]
    if (userRow) {
        res.json(userRow)
    }
    else if(!userRow){
        res.status(400).json({message:"Couldn't retreive user"})
    }
    else
        res.status(400).json({message:"Error with user profile route"})
}))

export default router