export const types = {
    GET_CLIENT_INVOICES : "GET_CLIENT_INVOICES",
    SET_CLIENT_INVOICES : "SET_CLIENT_INVOICES",
    SET_CURRENT_PAGE : "SET_CURRENT_PAGE",
    SET_CURRENT_CLIENT : "SET_CURRENT_CLIENT",
    DELETE_CLIENT_INVOICE : "DELETE_CLIENT_INVOICE",
    SET_INVOICE_PAID : "SET_INVOICE_PAID"
}
export const getAllClientInvoices = (client) => ({
    type: types.GET_CLIENT_INVOICES,
    payload: client
})

export const setClientInvoices = (invoices) => ({
    type: types.SET_CLIENT_INVOICES,
    payload: invoices
})

export const setCurrentClient = (client) => ({
    type: types.SET_CURRENT_CLIENT,
    payload:client
})

export const deleteInvoice = (invoiceID, clientID) => ({
    type: types.DELETE_CLIENT_INVOICE,
    payload: {
        invoiceID,
        clientID
    }
    
})

export const setMark = (invoice, client) => ({
    type: types.SET_INVOICE_PAID,
    payload:{
        invoice,
        client
    }
 })
 

export const setCurrentPageClientInvoices = (page) => ({
   type: types.SET_CURRENT_PAGE,
   payload:page
})

