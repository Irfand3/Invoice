import {DELETE_INVOICE_REQUEST,SEARCH_CLIENTINVOICES_REQUEST,SEARCH_CLIENTINVOICES_SUCCESS,SEARCH_CLIENTINVOICES_FAIL,DELETE_INVOICE_SUCCESS,DELETE_INVOICE_FAIL, SET_CURRENT_PAGE, GET_CLIENT_INVOICES_REQUEST,GET_CLIENT_INVOICES_SUCCESS,GET_CLIENT_INVOICES_FAIL, SET_PAID_REQUEST, SET_PAID_SUCCESS, SET_PAID_ERROR, SET_CURRENT_CLIENT} from "../../../actions/types"
const initialState = {
    invoices:[],
    error:null,
    loading:false, 
    currentPage:[], 
    currentClient:null
}
export const clientInvoicesReducer = (state = initialState, action) => {
    switch(action.type){
        
        case GET_CLIENT_INVOICES_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_CLIENT_INVOICES_SUCCESS:
            return{
                ...state,
                invoices:action.payload,
                loading:false,
            }
        case GET_CLIENT_INVOICES_FAIL:
            return{
                ...state,
                error:action.payload
            }
         case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:state.invoices.slice(action.payload*8-8,action.payload*8)
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
        case SET_CURRENT_CLIENT:
            return{
                ...state,
                currentClient:action.payload
            }
         case SEARCH_CLIENTINVOICES_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SEARCH_CLIENTINVOICES_SUCCESS:
            return{
                ...state,
                invoices: state.invoices.filter(invoice => invoice.paidStatus == action.payload),
                loading:false
            }
        case SEARCH_CLIENTINVOICES_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default:
            return{
                ...state
            }
    }
}