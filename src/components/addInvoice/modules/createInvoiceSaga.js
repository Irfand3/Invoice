import { takeLatest, put } from 'redux-saga/effects'
import {CREATE_INVOICE_FAIL, CREATE_INVOICE_REQUEST,CREATE_INVOICE_SUCCESS} from '../../../actions/types'

function* handleCreateInvoice(action){
    try {
        console.log("lodsd")
        let invoices = JSON.parse(localStorage.getItem("invoices") || "[]")
        invoices.push(action.payload)
        localStorage.setItem("invoices", JSON.stringify(invoices))
        yield put({type:CREATE_INVOICE_SUCCESS, payload:action.payload})
    } catch (error) {
        yield put({type:CREATE_INVOICE_FAIL, payload:error.message})
    }
}

function* createInvoiceSagaWatcher(){
    yield takeLatest(CREATE_INVOICE_REQUEST, handleCreateInvoice)
}


export default createInvoiceSagaWatcher