export const types = {
    SEARCH_CLIENT : "SEARCH_CLIENT",
    SEARCH_INVOICE : "SEARCH_INVOICE",
    SEARCH_CLIENT_INVOICES : "SEARCH_CLIENT_INVOICES"
}
export const searchClient = (query) => ({
 type: types.SEARCH_CLIENT,
 payload: query   
})

export const searchInvoice = (query) => ({
    type: types.SEARCH_INVOICE,
    payload: query   
})

export const searchClientInvoices = (query, client) => ({
    type: types.SEARCH_CLIENT_INVOICES,
    payload: {
        query,
        client
    }   
})

