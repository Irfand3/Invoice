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
import {searchClient} from "../../../../services/clientService"
import {setClients,setCurrentPage} from "../../../clients/modules/actions"
import {setInvoices, setCurrentPageInvoice} from "../../../invoices/modules/actions"
import {types} from "../actions"
import { searchInvoice, searchClientInvoices } from '../../../../services/invoiceService';
import { setClientInvoices, setCurrentPageClientInvoices } from '../../../clientInvoices/modules/actions';


function * searchClientsByQuery(action) {
     const query = action.payload
     
     const {data, error} = yield call(searchClient,query)
     if(error){
        notification.error({
            message:"Search clients failed",
            description:error
        })
        return
    }
    
    yield put(setClients(data))
    yield put(setCurrentPage(1))
}

function * searchInvoicesByQuery(action) {
    const query = action.payload
    console.log(query)
    console.log(typeof query)
    const {data, error} = yield call(searchInvoice,query)
    if(error){
       notification.error({
           message:"Search clients failed",
           description:error
       })
       return
   }
   console.log(data)
   yield put(setInvoices(data))
   yield put(setCurrentPageInvoice(1))
}

function * searchClientInvoice(action) {
    const client = action.payload.client
    const query = action.payload.query
    
    
    
    
    const {data, error} = yield call(searchClientInvoices, query, client)
    if(error){
        notification.error({
            message:"Filter invoices failed",
            description:error
        })
        return
    }
    console.log(data)
   yield put(setClientInvoices(data))
   yield put(setCurrentPageClientInvoices(1))
}

export default function * searchSaga() {
   yield all([
       takeLatest(types.SEARCH_CLIENT, searchClientsByQuery),
       takeLatest(types.SEARCH_INVOICE, searchInvoicesByQuery),
       takeLatest(types.SEARCH_CLIENT_INVOICES, searchClientInvoice)
   ])
}
