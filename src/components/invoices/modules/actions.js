import {CREATE_INVOICE_REQUEST, SEARCH_INVOICES_REQUEST,  SET_INVOICE_BACK, GET_ALL_INVOICES, SET_CURRENT_PAGE} from "../../../actions/types"

export const getAllInvoices  = () => {
    return (dispatch) => {
        dispatch({
            type:GET_ALL_INVOICES,
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

export const createNewInvoice = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:CREATE_INVOICE_REQUEST,
            payload:invoice
        })
    }
}



