import {SEARCH_CLIENT_REQUEST, SEARCH_INVOICES_REQUEST} from "../../../actions/types"
export const searchClient = (client) => {
    return (dispatch) => {
        dispatch({
            type:SEARCH_CLIENT_REQUEST,
            payload:client
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