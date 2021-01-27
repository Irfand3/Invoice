export const types = {
    GET_INVOICES : "GET_INVOICES",
    SET_INVOICES : "SET_INVOICES",
    SET_CURRENT_PAGE : "SET_CURRENT_PAGE",
    ADD_INVOICE : "ADD_INVOICE"
}

export const getInvoices = () => ({
    type: types.GET_INVOICES,
})

export const setCurrentPageInvoice = (page) => ({
    type: types.SET_CURRENT_PAGE,
    payload:page
})
 
export const addInvoice = (invoice) => ({
    type: types.ADD_INVOICE,
    payload:invoice
})


export const setInvoices = (data) => ({
    type: types.SET_INVOICES,
    payload: data
})




