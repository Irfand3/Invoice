const mongoose = require('mongoose')

const connectDB  = async () => {
    try {
        const uri = "mongodb+srv://irfanduric:irfanduric@antcolony.mphm3.mongodb.net/AntColony?retryWrites=true&w=majority"
        const connect = await mongoose.connect( uri,{
        useNewUrlParses:true
    })
        console.log("MongoDB connected!")
    } catch (error) {
        console.error(error.message)
    }
}