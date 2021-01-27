import express from "express"
import asyncHandler from "express-async-handler"
import Client from "../models/clientModel.js"
import {protectRoute} from "../middleware/authMiddleware.js"
import Invoice from "../models/invoiceModel.js"
import pool from "../config/db.js"

const router = express.Router()

router.post('/addClient', protectRoute, asyncHandler(async(req, res)=>
{
    const {name, company, description, totalAmount} = req.body
    const amount = totalAmount ? totalAmount : 0
    const client = await pool.query('INSERT INTO clients(client_name, company, notes, totalAmount, fk_user) VALUES ($1, $2, $3, $4, $5) RETURNING *'
    , [name, company, description, amount, req.user.user_id])

    if (client) {
        res.json(client.rows[0])
    }
    else
        res.status(400).json({message:"Invalid client"})
}))

router.get('/', protectRoute,asyncHandler(async(req, res)  =>{
    const clients =  await pool.query('SELECT * FROM clients WHERE fk_user = $1', 
    [req.user.user_id])

    res.status(201).json(clients.rows)
}))

router.get('/:id', protectRoute, asyncHandler(async(req,res) => {
    const client =  await pool.query('SELECT * FROM clients WHERE client_id = $1',
    [req.params.id])
    res.status(201).json(client.rows[0])
}))

router.get('/:id/invoices', protectRoute, asyncHandler(async(req,res) => {

     const invoices = await pool.query('SELECT * FROM invoices WHERE fk_client = $1',
    [req.params.id])
    if (invoices) {
        res.status(201).json(invoices.rows)
    } 
}))

router.patch('/setAmount/:id', protectRoute, asyncHandler(async(req, res) => {
    const {amount, sign} = req.body
    console.log(amount)
    const clientTotalAmount = await pool.query('SELECT totalAmount FROM clients WHERE client_id = $1',
    [req.params.id])
    console.log(clientTotalAmount.rows[0].totalamount)
    
     let newAmount = 0
    if (sign=="+") {
       newAmount = clientTotalAmount.rows[0].totalamount + amount
    }
    else if(sign=="-"){
        newAmount = clientTotalAmount.rows[0].totalamount - amount
    }
    console.log(newAmount)

    const client = await pool.query('UPDATE clients SET totalAmount = $1 WHERE client_id = $2', 
    [newAmount, req.params.id])

    if (client) {
        res.status(201).json({message:"Client amount changed"})
    }
    else
        res.status(404).json({msg:"Not found"})  
    
}))

router.get('/search/:query', protectRoute , asyncHandler(async(req, res) => {
    const query = req.params.query
   
    const clients = await pool.query('SELECT * FROM clients WHERE fk_user = $1 AND (client_name = $2 OR company = $2)',
    [req.user.user_id, query])

    if (clients) {
        res.status(201).json(clients.rows)
    }
    else
        res.status(400).json({message:"Client search request failed"})
}))

export default router