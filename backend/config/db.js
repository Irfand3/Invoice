import mongoose from 'mongoose'
import { connect } from 'react-redux'

const connectDB  = async () => {
    try {
        const uri = "mongodb+srv://irfanduric:irfanduric@antcolony.mphm3.mongodb.net/InvoiceProject?retryWrites=true&w=majority"
        const connect = await mongoose.connect( uri,{
        useUnifiedTopology:true,
        useNewUrlParses:true,
        useCreateIndex:true
    })
        console.log("MongoDB connected!")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB
