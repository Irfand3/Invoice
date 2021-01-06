import {DELETE_INVOICE_REQUEST,CREATE_INVOICE_REQUEST,GET_INVOICES_REQUEST, GET_INVOICES_SUCCESS, GET_INVOICES_FAIL, SEARCH_INVOICES_REQUEST,  SET_INVOICE_BACK, GET_ALL_INVOICES, SET_CURRENT_PAGE} from "./types"

export const getAllInvoices  = () => {
    return (dispatch) => {
        dispatch({
            type:GET_ALL_INVOICES,
        })
    }
}

export const searchInvoice = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:SEARCH_INVOICES_REQUEST,
            payload:invoice
        })
    }
}

export const setInvoiceBack = () => {
    return (dispatch) => {
        dispatch({
            type:SET_INVOICE_BACK,
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



