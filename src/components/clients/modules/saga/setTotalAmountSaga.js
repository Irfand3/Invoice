import { takeLatest, put } from 'redux-saga/effects'
import {SET_TOTAL_AMOUNT_REQUEST, SET_TOTAL_AMOUNT_SUCCESS, SET_TOTAL_AMOUNT_FAIL} from '../../../../actions/types'

function* handleSetTotalAmount(action){
    try {
        let clients = JSON.parse(localStorage.getItem("clients") || "[]")
        console.log(action.payload.client)
        console.log(action.payload.amount)
        clients.forEach(client => {
            if(client.name === action.payload.client.name){
                client.totalAmount = parseInt(client.totalAmount) + parseInt(action.payload.amount)
                localStorage.setItem("clients", JSON.stringify(clients))
                console.log(action.payload.client)
                console.log(action.payload.amount)
            }
        });
        yield put({type:SET_TOTAL_AMOUNT_SUCCESS, payload:clients})
    } catch (error) {
        yield put({type:SET_TOTAL_AMOUNT_FAIL, payload:error.message})
    }
}

function* setTotalAmountSagaWatcher(){
    yield takeLatest(SET_TOTAL_AMOUNT_REQUEST, handleSetTotalAmount)
}


export default setTotalAmountSagaWatcher