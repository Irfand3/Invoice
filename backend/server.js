import express from "express"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import clientRoutes from "./routes/clientRoutes.js"
import invoiceRoutes from "./routes/invoiceRoutes.js"
import cors from "cors" 


const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/users', userRoutes)
app.use('/api/clients', clientRoutes)
app.use('/api/invoices', invoiceRoutes)
app.use(notFound)
app.use(errorHandler)


app.listen(5000, console.log("App running on 5000 port"))