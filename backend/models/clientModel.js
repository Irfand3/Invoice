import mongoose from 'mongoose'
import User from "./userModel.js"

const clientSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    description:{
        type:String,
        required:true
    },
    totalAmount: {
        type:Number,
        default:0,
        required:true
    }
})

const Client = mongoose.model('Client', clientSchema)
export default Client