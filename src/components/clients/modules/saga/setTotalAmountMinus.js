import { takeLatest, put } from 'redux-saga/effects'
import {SET_TOTAL_AMOUNT_MINUS_REQUEST, SET_TOTAL_AMOUNT_MINUS_SUCCESS, SET_TOTAL_AMOUNT_MINUS_FAIL} from '../../../../actions/types'

function* handleSetTotalAmountMinus(action){
    try {
        let clients = JSON.parse(localStorage.getItem("clients") || "[]")
        
        clients.forEach(client => {
            if(client.company === action.payload.client.company){
                console.log("hii")
                client.totalAmount = parseInt(client.totalAmount) - parseInt(action.payload.amount)
                localStorage.setItem("clients", JSON.stringify(clients))   
            }
        });
        yield put({type:SET_TOTAL_AMOUNT_MINUS_SUCCESS, payload:action.payload})
    } catch (error) {
        yield put({type:SET_TOTAL_AMOUNT_MINUS_FAIL, payload:error.message})
    }
}

function* setTotalAmountMinusSagaWatcher(){
    yield takeLatest(SET_TOTAL_AMOUNT_MINUS_REQUEST, handleSetTotalAmountMinus)
}


export default setTotalAmountMinusSagaWatcher