import { takeLatest,select,put } from 'redux-saga/effects'
import {DELETE_INVOICE_REQUEST, DELETE_INVOICE_FAIL, DELETE_INVOICE_SUCCESS} from '../../../../actions/types'


function* deleteInvoiceHandler(action){
   try {
        console.log(action.payload)
        let invoices = JSON.parse(localStorage.getItem("invoices") || "[]")
        //POPRAVITI DA IZBACI PRAVI INVOICE PREKO ID-A NA BACKENDU, ZBOG LOCALSTORAGE IMA STRINGIFY
        const filteredArray = invoices.filter(invoice => JSON.stringify(invoice) !== JSON.stringify(action.payload))
        
        console.log(filteredArray)
        localStorage.setItem("invoices", JSON.stringify(filteredArray)) 
        yield put({type:DELETE_INVOICE_SUCCESS, payload:action.payload})
    } catch (error) {
        yield put({type:DELETE_INVOICE_FAIL, payload:error.message})
   }
}

function* deleteInvoiceWatcher(){
    yield takeLatest(DELETE_INVOICE_REQUEST, deleteInvoiceHandler)
}


export default deleteInvoiceWatcher