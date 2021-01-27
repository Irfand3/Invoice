import express from "express"
import asyncHandler from "express-async-handler"
import Invoice from "../models/invoiceModel.js"
import {protectRoute} from "../middleware/authMiddleware.js"
import lodash from "lodash"
import pool from "../config/db.js"

const router = express.Router()

router.get('/', protectRoute, asyncHandler(async(req,res) => {
    const invoices =  await pool.query('SELECT * FROM invoices WHERE fk_user = $1', 
    [req.user.user_id])
    res.status(201).json(invoices.rows)
}))

router.post('/addInvoice', protectRoute, asyncHandler(async(req,res) => {

    const {client, amount, dueTo, company, paidStatus ,month, clientID} = req.body
 
    const invoices = await pool.query('INSERT INTO invoices(client, month, amount, dueTo, company, paidStatus, fk_client, fk_user) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [client, month, amount, dueTo, company, paidStatus, clientID, req.user.user_id])

    if (invoices) {
     
        res.status(201).json(invoices.rows)
    }
    else
        res.status(400).json({message: "Invalid invoice"}) 
}))

router.get('/:id', protectRoute, asyncHandler(async(req,res) => {
    const invoice =  await pool.query('SELECT * FROM invoices WHERE invoice_id = $1',
    [req.params.id])
    if (invoice) {
        res.status(201).json(invoice.rows[0])
    }
    else
        res.status(404).json({msg: "Invoice not found"})
}))

router.delete('/:id', protectRoute, asyncHandler(async(req, res) => {
    const invoice = await pool.query('DELETE FROM invoices WHERE invoice_id = $1',
    [req.params.id])

    if (invoice) {
        res.json({message: "Invoice Deleted!"})
    }
    else
        res.status(404).json({msg: "Invoice not found"})
}))

router.patch('/:id', protectRoute, asyncHandler(async(req, res) => {

    const setPaid = true
    const invoice = await pool.query('UPDATE invoices SET paidStatus = $1 WHERE invoice_id = $2 RETURNING paidStatus',
    [setPaid, req.params.id])

    console.log(invoice.rows[0].paidstatus)
    if (invoice) {
        res.status(201).json(invoice.rows)
    }

    
    
}))

router.get('/search/:query', protectRoute , asyncHandler(async(req, res) => {
    let query = req.params.query
    let invoices
    if (query == "true" || query=="false") {
         invoices = await pool.query('SELECT * FROM invoices WHERE fk_user = $1 AND paidStatus = $2',
        [req.user.user_id, query])
    }
    else{
     invoices = await pool.query('SELECT * FROM invoices WHERE fk_user = $1 AND (client = $2 OR month = $2 OR company = $2)',
   [req.user.user_id, query]) }

    if (invoices) {
        
        res.status(201).json(invoices.rows)
    }
    else
        res.status(400).json({message:"Invoice search request failed"})
}))

router.get('/search/clientInvoices/:query/:client', protectRoute , asyncHandler(async(req, res) => {
    const query = req.params.query
    const client = req.params.client
     const invoices = await pool.query('SELECT * FROM invoices WHERE fk_user = $1 AND fk_client = $2 AND paidStatus = $3',
    [req.user.user_id, client, query])
    
    if (invoices) {
        
        res.status(201).json(invoices.rows)
    }
    else
        res.status(400).json({message:"Invoice search request failed"})
}))
export default router