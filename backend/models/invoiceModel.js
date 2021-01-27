import mongoose from 'mongoose'
import User from "./userModel.js"
import Client from "./clientModel.js"

const invoiceSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    clientID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Client'
    },
    client:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    month:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    dueTo:{
        type:Date,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    paidStatus:{
        type:Boolean,
        required:true,
        default:false
    }
})

const Invoice = mongoose.model('Invoice', invoiceSchema)
export default Invoice