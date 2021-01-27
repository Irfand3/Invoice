import { all, spawn} from 'redux-saga/effects'
import "core-js/stable";
import "regenerator-runtime/runtime";
import authSaga from "./auth"
import invoicesSaga from "../components/invoices/modules/saga/sagas"
import clientsSaga from "../components/clients/modules/saga/sagas"
import saveClientAndInvoiceSaga from "../components/addInvoice/modules/sagas"
import clientInvoicesSaga from "../components/clientInvoices/modules/sagas"
import searchSaga from "../components/search/modules/saga/sagas"


const sagas = [
    authSaga,
    invoicesSaga,
    clientsSaga,
    saveClientAndInvoiceSaga,
    clientInvoicesSaga,
    searchSaga
]

export default function * () {
    yield all(sagas.map(spawn));
  }

