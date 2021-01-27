import {types} from "./actions"
const initialState = {
    invoices:[],
    currentPage:[], 
    currentClient:null
}
export const clientInvoicesReducer = (state = initialState, action) => {
    switch(action.type){
        
        case types.SET_CLIENT_INVOICES:
            return{
                ...state,
                invoices: action.payload
            }
        case types.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:state.invoices.slice(action.payload*8-8,action.payload*8)
            }
        case types.SET_CURRENT_CLIENT:
            return{
                ...state,
                currentClient:action.payload
            }
        default:
            return{
                ...state
            }
    }
}