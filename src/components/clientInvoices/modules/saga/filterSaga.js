import { takeEvery ,put} from 'redux-saga/effects'
import {SEARCH_CLIENTINVOICES_SUCCESS, SEARCH_CLIENTINVOICES_FAIL, SEARCH_CLIENTINVOICES_REQUEST} from '../../../../actions/types'

function* handleFilterClientInvoices(action){
    try {
        yield put({type:SEARCH_CLIENTINVOICES_SUCCESS, payload:action.payload})
    } catch (error) {
       yield put({type:SEARCH_CLIENTINVOICES_FAIL, payload:error.message}) 
    }
}

function* filterSagaWatcher(){
    yield takeEvery(SEARCH_CLIENTINVOICES_REQUEST, handleFilterClientInvoices)
}


export default filterSagaWatcher;