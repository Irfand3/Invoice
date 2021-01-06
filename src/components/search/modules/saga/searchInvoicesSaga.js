import { takeEvery ,put} from 'redux-saga/effects'
import {SEARCH_INVOICES_REQUEST, SEARCH_INVOICES_SUCCESS, SEARCH_INVOICES_FAIL} from '../../../../actions/types'

function* handleSearchInvoices(action){
    try {
        console.log("from invoice")
       
        yield put({type:SEARCH_INVOICES_SUCCESS, payload:action.payload})
    } catch (error) {
       yield put({type:SEARCH_INVOICES_FAIL, payload:error.message}) 
    }
}

function* searchInvoicesSagaWatcher(){
    yield takeEvery(SEARCH_INVOICES_REQUEST, handleSearchInvoices)
}


export default searchInvoicesSagaWatcher;