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
import {types, setInvoices} from "../actions"
import { invoiceServiceGet,invoiceServicePost } from "../../../../services/invoiceService"

function * get(action){

    const {data, error}  = yield call(invoiceServiceGet, "")

    if(error){
        notification.error({
            message:"Get invoices request failed",
            description:error
        })
        return
    }
    console.log(data)
    yield put(setInvoices(data))
    
}

function * saveInvoice(action){

    const {client, dueTo, amount, company, clientID, paidStatus, month} = action.payload
    
    const postData = {
        client,
        dueTo,
        amount,
        company,
        clientID,
        paidStatus,
        month
    }

    const {data, error} = yield call(invoiceServicePost, "addInvoice", postData)

    if(error){
        notification.error({
            message:"Invoice Save failed",
            description:error
        })
        return
    }
    else if(data){
        notification.success({
            message:"Invoice Save success!",
            description:data.message
            
    })
    yield get()
}
}

export default function * invoicesSaga() {
    yield all([
        takeLatest(types.GET_INVOICES, get),
        takeLatest(types.ADD_INVOICE, saveInvoice)
    ])
}
