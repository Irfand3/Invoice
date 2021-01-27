export const types =  {
    ADD_CLIENT_AND_INVOICE: "ADD_CLIENT_AND_INVOICE"
}

export const createClientAndInvoice = (client, invoice) => ({
    type: types.ADD_CLIENT_AND_INVOICE,
    payload:{
        client,
        invoice
    }
})

