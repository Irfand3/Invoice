import {
    all,
    call,
    takeLeading,
    put,
    takeLatest,
    delay,
    select,
} from 'redux-saga/effects';
import { notification } from 'antd';
import { clientServicePost } from "../../../services/clientService"
import {types} from "./actions"
import { invoiceServicePost } from '../../../services/invoiceService';

function * saveClient(action){
    const {name, company, description, totalAmount} = action.payload.client
  
    const postData = {
        name,
        company,
        description,
        totalAmount
    }
    const {data, error} = yield call(clientServicePost, "addClient", postData)
    
    if(error){
        notification.error({
            message:"Client Save failed",
            description:error
        })
        return
    }
    else if (data) {
        notification.success({
            message:"Save Client Success",
        })
    }
    console.log(data)
    const invoice = {...action.payload.invoice, clientID:data.client_id}
    console.log(invoice)
    yield saveInvoice(invoice)
    
}

function * saveInvoice(invoice){
    
    const postData = {
        ...invoice
    }
    console.log(postData)
    const {data, error} = yield call(invoiceServicePost, "addInvoice", postData)
    if(error){
        notification.error({
            message:"Invoice Save failed",
            description:error
        })
        return
    }
    else if (data) {
        notification.success({
            message:"Save Invoice Success",
        })
    }
    console.log(data)

}

export default function * saveClientAndInvoiceSaga() {
    yield all([
        takeLatest(types.ADD_CLIENT_AND_INVOICE, saveClient),
    ])
}
