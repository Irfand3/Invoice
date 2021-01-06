import {combineReducers} from 'redux'
import {registerUserReducer} from '../components/register/modules/reducer'
import {loginUserReducer} from '../components/login/modules/reducer'
import {invoiceReducer} from '../components/invoices/modules/reducer'
import {clientReducer} from "../components/clients/modules/reducer"
import {clientInvoicesReducer} from '../components/clientInvoices/modules/reducer'

export default combineReducers({
    userRegister: registerUserReducer,
    userLogin: loginUserReducer,
    invoice:invoiceReducer,
    client:clientReducer,
    clientInvoices:clientInvoicesReducer
})