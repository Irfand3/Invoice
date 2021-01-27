import {combineReducers} from 'redux'
import {authReducer} from '../components/login/modules/reducer'
import {invoiceReducer} from '../components/invoices/modules/reducer'
import {clientReducer} from "../components/clients/modules/reducer"
import {clientInvoicesReducer} from '../components/clientInvoices/modules/reducer'

export default combineReducers({
    auth: authReducer,
    invoice:invoiceReducer,
    client:clientReducer,
    clientInvoices:clientInvoicesReducer
})