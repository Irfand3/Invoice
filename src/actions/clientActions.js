import {SET_CURRENT_CLIENT,GET_ALL_CLIENTS,DELETE_INVOICE_REQUEST,SET_TOTAL_AMOUNT_REQUEST,SET_TOTAL_AMOUNT_MINUS_REQUEST,SAVE_CLIENT_REQUEST, GET_CLIENT_INVOICES_REQUEST, GET_CLIENT_INVOICES_SUCCESS, GET_CLIENT_INVOICES_FAIL, SET_PAID_REQUEST, SEARCH_CLIENT_REQUEST, SET_CURRENT_PAGE} from "./types"



export const getClientInvoices = (client) => {
    return (dispatch) => {
        dispatch({
            type:GET_CLIENT_INVOICES_REQUEST,
            payload:client
        })
    }
}

export const searchClient = (client) => {
    return (dispatch) => {
        dispatch({
            type:SEARCH_CLIENT_REQUEST,
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

export const deleteInvoice = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:DELETE_INVOICE_REQUEST,
            payload:invoice
        })
    }
}

