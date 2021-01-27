import {types} from "./actions"

const initialInvoiceState = {
    invoices:[],
    currentPage:[],
    
} 

export const invoiceReducer = (state = initialInvoiceState, action) => {
    switch(action.type) {
        case types.SET_INVOICES:
            return{
                ...state,
                invoices:action.payload
            }
        case types.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:state.invoices.slice(action.payload*8-8,action.payload*8)
            }
        default:
            return{
                ...state,
                
            }
    }
}