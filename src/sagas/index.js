import { all } from 'redux-saga/effects'
import "core-js/stable";
import "regenerator-runtime/runtime";
import registerUserSaga from "../components/register/modules/registerUserSaga"
import loginUserSaga from "../components/login/modules/saga/loginUserSaga"
import logoutUserSaga from "../components/login/modules/saga/logoutUserSaga"
import searchInvoicesSaga from "../components/search/modules/saga/searchInvoicesSaga"
import saveClientSaga from "../components/addClient/modules/saveClientSaga"
import clientInvoices from "../components/clientInvoices/modules/saga/clientInvoices"
import markSaga from "../components/invoices/modules/saga/markSaga"
import createInvoiceSaga from '../components/addInvoice/modules/createInvoiceSaga'
import setTotalAmountSaga from '../components/clients/modules/saga/setTotalAmountSaga'
import deleteInvoice from "../components/invoices/modules/saga/deleteInvoice"
import searchClient from "../components/search/modules/saga/searchClient"
import setTotalAmountMinus from '../components/clients/modules/saga/setTotalAmountMinus'
import filterSaga from "../components/clientInvoices/modules/saga/filterSaga"

export default function* rootSaga(){
    yield all([
        registerUserSaga(),
        loginUserSaga(),
        logoutUserSaga(),
        searchInvoicesSaga(),
        saveClientSaga(),
        clientInvoices(),
        markSaga(),
        createInvoiceSaga(),
        setTotalAmountSaga(),
        deleteInvoice(),
        setTotalAmountMinus(),
        searchClient(),
        filterSaga()
    ])
}