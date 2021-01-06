import {SET_PAID_REQUEST, SET_PAID_SUCCESS, CREATE_INVOICE_REQUEST, CREATE_INVOICE_SUCCESS, CREATE_INVOICE_FAIL,SET_PAID_ERROR,GET_INVOICES_REQUEST, GET_INVOICES_SUCCESS, GET_INVOICES_FAIL, SEARCH_INVOICES_REQUEST, SEARCH_INVOICES_SUCCESS, SEARCH_INVOICES_FAIL, SET_INVOICE_BACK,GET_ALL_INVOICES,SET_CURRENT_PAGE, DELETE_INVOICE_REQUEST, DELETE_INVOICE_SUCCESS, DELETE_INVOICE_FAIL} from "../../../actions/types"
const invoicesFromLocalStorage = JSON.parse(localStorage.getItem("invoices") || "[]")
const user = JSON.parse(localStorage.getItem("userInfo") || "[]")

const initialInvoiceState = {
    invoices:invoicesFromLocalStorage.filter(invoice => invoice.userEmail === user.email),
    currentPage:[],
    error:null,
    loading:false
} 

export const invoiceReducer = (state = initialInvoiceState, action) => {
    switch(action.type) {
        
        case CREATE_INVOICE_REQUEST:
            return{
                ...state,
                loading:true
            }
        case CREATE_INVOICE_SUCCESS:
            return{
                ...state,
                invoices:[...state.invoices, action.payload],
                loading:false
            }
        case CREATE_INVOICE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case SEARCH_INVOICES_REQUEST:
            return{
                ...state,
                invoices:invoicesFromLocalStorage.filter(invoice => invoice.userEmail === user.email),
                loading:true
            }
        case SEARCH_INVOICES_SUCCESS:
            return{
                ...state,
                invoices: state.invoices.filter(invoice => invoice.client === action.payload || invoice.company === action.payload || invoice.paidStatus == action.payload),
                loading:false
            }
        case SEARCH_INVOICES_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case SET_INVOICE_BACK:
            return{
                ...state,
                invoices: state.invoices
            }
        case GET_ALL_INVOICES:
            return{
                ...state,
                invoices:invoicesFromLocalStorage.filter(invoice => invoice.userEmail === user.email)
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:state.invoices.slice(action.payload*8-8,action.payload*8)
            }
        

        case DELETE_INVOICE_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case DELETE_INVOICE_SUCCESS:
            return{
                ...state,
                loading:false,
                invoices: state.invoices.filter(invoice => invoice !== action.payload)
            }
        case DELETE_INVOICE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        
        case SET_PAID_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SET_PAID_SUCCESS:
            return{
                ...state,
                loading:false,
                invoices: state.invoices.map(invoice => invoice.amount === action.payload.amount && 
                    invoice.client === action.payload.client &&
                    invoice.company === action.payload.company &&
                    invoice.companyId === action.payload.companyId &&
                    invoice.currency === action.payload.currency &&
                    invoice.dueTo === action.payload.dueTo &&
                    invoice.paidStatus === action.payload.paidStatus ? invoice = {...invoice, paidStatus:true} : invoice)
            }
        case SET_PAID_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return{
                ...state,
                
            }
    }
}