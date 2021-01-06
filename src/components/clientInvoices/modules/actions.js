import {GET_CLIENT_INVOICES_REQUEST,SET_PAID_REQUEST,DELETE_INVOICE_REQUEST,SEARCH_CLIENTINVOICES_REQUEST, SET_TOTAL_AMOUNT_REQUEST,SET_TOTAL_AMOUNT_MINUS_REQUEST, SET_CURRENT_PAGE} from "../../../actions/types"

export const getClientInvoices = (client) => {
    return (dispatch) => {
        dispatch({
            type:GET_CLIENT_INVOICES_REQUEST,
            payload:client
        })
    }
}
export const setMark = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:SET_PAID_REQUEST,
            payload:invoice
        })
    }
}
export const deleteInvoice = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:DELETE_INVOICE_REQUEST,
            payload:invoice
        })
    }
}
export const setClientTotalAmount = (amount, client) => {
    return (dispatch) => {
        dispatch({
            type:SET_TOTAL_AMOUNT_REQUEST,
            payload:{amount, client}
        })
    }
} 

export const setClientTotalAmountMinus = (amount, client) => {
    return (dispatch) => {
        dispatch({
            type:SET_TOTAL_AMOUNT_MINUS_REQUEST,
            payload:{amount, client}
        })
    }
} 

export const setCurrentPage = (page) => {
    return (dispatch) => {
        dispatch({
            type:SET_CURRENT_PAGE,
            payload:page
        })
    }
}

export const searchClientInvoices = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:SEARCH_CLIENTINVOICES_REQUEST,
            payload:invoice
        })
    }
}