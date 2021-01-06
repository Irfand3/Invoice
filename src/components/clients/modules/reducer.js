import {GET_ALL_CLIENTS,SEARCH_CLIENT_REQUEST,SEARCH_CLIENT_SUCCESS,SEARCH_CLIENT_FAIL,DELETE_INVOICE_REQUEST,DELETE_INVOICE_SUCCESS,DELETE_INVOICE_FAIL, SAVE_CLIENT_REQUEST, SAVE_CLIENT_SUCCESS, SET_TOTAL_AMOUNT_MINUS_REQUEST, SET_TOTAL_AMOUNT_MINUS_SUCCESS,SET_TOTAL_AMOUNT_MINUS_FAIL,SAVE_CLIENT_FAIL, SET_CURRENT_PAGE, GET_CLIENT_INVOICES_REQUEST,GET_CLIENT_INVOICES_SUCCESS,GET_CLIENT_INVOICES_FAIL, SET_PAID_REQUEST, SET_PAID_SUCCESS, SET_TOTAL_AMOUNT_REQUEST, SET_TOTAL_AMOUNT_SUCCESS, SET_TOTAL_AMOUNT_FAIL, SET_PAID_ERROR, SET_CURRENT_CLIENT} from "../../../actions/types"
const clientsFromStorage = JSON.parse(localStorage.getItem("clients") || "[]")
const user = JSON.parse(localStorage.getItem("userInfo") || "[]")

const initialState = {
    clients:clientsFromStorage.filter(client => client.userEmail === user.email),
    currentPage:[],
    error:null,
    loading:false,
}

export const clientReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_ALL_CLIENTS:
            return{
                ...state,
                clients:clientsFromStorage.filter(client => client.userEmail === user.email),
                currentPage:state.clients.slice(action.payload*8-8,action.payload*8)
            }
        case SAVE_CLIENT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SAVE_CLIENT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case SAVE_CLIENT_SUCCESS:
            return{
                ...state,
                clients:[... state.clients,action.payload],
                loading:false,
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:state.clients.slice(action.payload*8-8,action.payload*8)
            }
        case SEARCH_CLIENT_REQUEST:
            return{
                ...state,
                clients:clientsFromStorage.filter(client => client.userEmail === user.email),
                loading:true
            }
        case SEARCH_CLIENT_SUCCESS:
            return{
                ...state,
                clients: state.clients.filter(client => client.name === action.payload || client.company === action.payload),
                loading:false
            }
        case SEARCH_CLIENT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case SET_TOTAL_AMOUNT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SET_TOTAL_AMOUNT_SUCCESS:
            return{
                ...state,
                clients: action.payload,
                loading:false
            }
        case SET_TOTAL_AMOUNT_FAIL:
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        case SET_TOTAL_AMOUNT_MINUS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SET_TOTAL_AMOUNT_MINUS_SUCCESS:
            return{
                ...state,
                clients: state.clients.map(client => client.company === action.payload.client.company ? client = {...client, totalAmount: client.totalAmount - action.payload.amount} : client),
                loading:false
            }
        case SET_TOTAL_AMOUNT_MINUS_FAIL:
            return{
                ...state,
                error:action.payload,
                loading:false
            }
         case SET_PAID_SUCCESS:
            return{
                ...state,
                clients: state.clients.map(client => client.name === action.payload.client ? client = {...client, totalAmount: client.totalAmount - action.payload.amount} : client),
                loading:false
            } 
       
        
        default:
            return{
                ...state
            }
        
    }
        
       
}