const express = require ('express')
const { connect } = require('mongoose')
const connectDB = require('./config/db')
const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

connectDB()
app.listen(5000, console.log("App running on 5000 port"))