import {CREATE_INVOICE_REQUEST} from "../../../actions/types"

export const createNewInvoice = (invoice) => {
    return (dispatch) => {
        dispatch({
            type:CREATE_INVOICE_REQUEST,
            payload:invoice
        })
    }
}

