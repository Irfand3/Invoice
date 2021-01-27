import {AuthorizedApiService} from "./apiService"

export const invoiceServiceGet = async (path) => AuthorizedApiService.get(`invoices/${path}`)
.then((res) => res)
.catch((error)=> {error})

export const invoiceServicePost = async (path, data) => AuthorizedApiService.post(`invoices/${path}`, data)
.then((res) => res)
.catch((error) => console.log(error))

export const deleteInvoice = async (id) => AuthorizedApiService.delete(`invoices/${id}`)
.then((res) => res)
.catch((error) => console.log(error))

export const setPaidStatusInvoice = async (id) => AuthorizedApiService.patch(`invoices/${id}`)
.then((res) => res)
.catch((error) => console.log(error))

export const searchInvoice = async (query, data) => AuthorizedApiService.get(`invoices/search/${query}`, data)
.then((res) => res)
.catch((error) => {error})

export const searchClientInvoices = async (query, client) => AuthorizedApiService.get(`invoices/search/clientInvoices/${query}/${client}`)
.then((res) => res)
.catch((error) => {error})