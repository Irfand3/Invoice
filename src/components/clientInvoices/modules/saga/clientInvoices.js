import { takeEvery,select,put } from 'redux-saga/effects'
import {GET_CLIENT_INVOICES_REQUEST,GET_CLIENT_INVOICES_SUCCESS,GET_CLIENT_INVOICES_FAIL} from '../../../../actions/types'

const getInvoices = state => state.invoice.invoices;
const user = JSON.parse(localStorage.getItem("userInfo"))
function* handleGetClientInvoices(action){

   try {
        //const state = yield select(getInvoices);
        const invoicesFromLocalStorage = JSON.parse(localStorage.getItem("invoices") || "[]")
        console.log("das" + action.payload)
        let invoices = []
        invoicesFromLocalStorage.map(invoice => invoice.client === action.payload && user.email === invoice.userEmail ? invoices.push(invoice) : console.log("Not same"))
        yield put({type:GET_CLIENT_INVOICES_SUCCESS, payload:invoices})
    } catch (error) {
        yield put({type:GET_CLIENT_INVOICES_FAIL, payload:error.message})
   }
}

function* getClientInvoicesWatcher(){
    yield takeEvery(GET_CLIENT_INVOICES_REQUEST, handleGetClientInvoices)
}


export default getClientInvoicesWatcher