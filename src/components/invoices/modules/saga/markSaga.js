import { takeEvery,select,put, takeLatest } from 'redux-saga/effects'
import {SET_PAID_REQUEST, SET_PAID_SUCCESS, SET_PAID_FAIL} from '../../../../actions/types'



function* handleSetPaid(action){

   try {
        let clients = JSON.parse(localStorage.getItem("clients") || "[]")
        let invoices = JSON.parse(localStorage.getItem("invoices") || "[]")
        
        invoices.forEach(invoice => {
            
            if(JSON.stringify(invoice) === JSON.stringify(action.payload))
            {invoice.paidStatus = true}
        });
        
        clients.forEach(client => {
            if(client.name === action.payload.client)
            {client.totalAmount = parseInt(client.totalAmount) - parseInt(action.payload.amount)}
        });

        localStorage.setItem("clients", JSON.stringify(clients)) 
        localStorage.setItem("invoices", JSON.stringify(invoices))

        
        yield put({type:SET_PAID_SUCCESS, payload:action.payload})
    } catch (error) {
        yield put({type:SET_PAID_FAIL, payload:error.message})
   }
}

function* setPaidSagaWatcher(){
    yield takeLatest(SET_PAID_REQUEST, handleSetPaid)
}


export default setPaidSagaWatcher;