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
import {types, setInvoices, setClients} from "../actions"
import { clientServiceGet, clientServicePost ,setClientTotalAmount} from "../../../../services/clientService"

function * getUserClients(action){

    const {data, error}  = yield call(clientServiceGet, "")
    
    if(error){
        notification.error({
            message:"Get invoices request failed",
            description:error
        })
        return
    }
    console.log(data)
    yield put(setClients(data))
    
}

function * addNewClient(action) {
    const {name, company, description} = action.payload
    const postData = {
        name,
        company,
        description
    }
    const {data, error} = yield call(clientServicePost, "addClient", postData)
    console.log(data)
    if(error){
        notification.error({
            message:"Client Save failed",
            description:error
        })
        return
    }
    else if(data){
        notification.success({
            message:"Client Save success!",
            description:data.message
        })
    yield getUserClients()
    }       
}

function * setTotalAmount(action){
    const {clientID, amount, sign} = action.payload
    const postData = {
        amount: JSON.parse(amount),
        sign
    }
    
    const {data, error} = yield call(setClientTotalAmount, clientID, postData)
    if(error){
        notification.error({
            message:"Could change client amount!",
            description:error
        })
        return
    }
    else
    notification.success({
            message:"Client amount changed successfuly!"
    })
    console.log(data.message)
  
    
}

export default function * clientsSaga() {
    yield all([
        takeLatest(types.GET_CLIENTS, getUserClients),
        takeLatest(types.ADD_CLIENT, addNewClient),
        takeLatest(types.SET_CLIENT_TOTAL_AMOUNT, setTotalAmount)
    ])
}
