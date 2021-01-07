import express from "express"
import connectDB from "./config/db.js"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

connectDB()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(5000, console.log("App running on 5000 port"))