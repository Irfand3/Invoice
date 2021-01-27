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
import {setClientInvoices} from "./actions"
import {clientInvoicesGet} from "../../../services/clientService"
import {types} from "./actions"
import {deleteInvoice} from "../../../services/invoiceService"
import {setClientTotalAmount} from "../../clients/modules/actions"
import {setPaidStatusInvoice} from "../../../services/invoiceService"

function * getClientInvoices(action){

    const {data, error} = yield call(clientInvoicesGet, action.payload)
    console.log(data)
    if(error){
        notification.error({
            message:"Couldn't get client invoices",
            description:error
        })
        return
    }
    else{
        yield put(setClientInvoices(data))
    }

}

function * deleteClientInvoice(action){
    console.log(action.payload)
    const invoiceId = action.payload.invoiceID
    const clientId = action.payload.clientID
    console.log("hi" + action.payload.invoiceID)
    const {data, error} = yield call(deleteInvoice, invoiceId)
    if(error){
        notification.error({
            message:"Delete invoice failed",
            description:error
        })
        return
    }
    if (data) {
        notification.success({
            message:"Delete invoice success!"
        })
    }
    
    yield getClientInvoices({payload:clientId})
}

function * setMarkAsPaid(action){
    const invoiceID = action.payload.invoice.invoice_id
    const {data, error} = yield call(setPaidStatusInvoice, invoiceID)
    if (data) {
        yield put(setClientTotalAmount(action.payload.invoice.amount, action.payload.client.client_id, "-"))
        notification.success({
            message:"Set invoice as paid success!"
        })
    }
    yield getClientInvoices({payload:action.payload.client.client_id})
}

export default function * clientInvoicesSaga() {
    yield all([
        takeLatest(types.GET_CLIENT_INVOICES, getClientInvoices),
        takeLatest(types.DELETE_CLIENT_INVOICE,deleteClientInvoice),
        takeLatest(types.SET_INVOICE_PAID,setMarkAsPaid),

    ])
}
