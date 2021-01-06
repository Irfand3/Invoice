import { takeLatest, put } from 'redux-saga/effects'
import {SAVE_CLIENT_FAIL, SAVE_CLIENT_SUCCESS,SAVE_CLIENT_REQUEST} from '../../../actions/types'

function* handleSaveClient(action){
    try {
        let clients = JSON.parse(localStorage.getItem("clients") || "[]")
        clients.push(action.payload)
        localStorage.setItem("clients", JSON.stringify(clients))
        yield put({type:SAVE_CLIENT_SUCCESS, payload:action.payload})
    } catch (error) {
        yield put({type:SAVE_CLIENT_FAIL, payload:error.message})
    }
}

function* saveClientSagaWatcher(){
    yield takeLatest(SAVE_CLIENT_REQUEST, handleSaveClient)
}


export default saveClientSagaWatcher