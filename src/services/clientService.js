import {AuthorizedApiService} from "./apiService"

export const clientServiceGet = async (path) => AuthorizedApiService.get(`clients/${path}`)
.then((res) => res)
.catch((error)=>console.log(error))

export const clientServicePost = async (path, data) => AuthorizedApiService.post(`clients/${path}`, data)
.then((res) => res)
.catch((error)=>console.log(error))

export const clientInvoicesGet = async (path) => AuthorizedApiService.get(`clients/${path}/invoices`)
.then((res) => res)
.catch((error)=>console.log(error))

/* export const saveClientAndInvoice = async (client, invoice) => AuthorizedApiService.post('clients/addClient', client)
.then((res) => AuthorizedApiService.post('invoices/addInvoice', invoice = {...invoice, userID:res.data._id}))
.catch((error)=>console.log(error)) */

export const setClientTotalAmount = async (id, data) => AuthorizedApiService.patch(`clients/setAmount/${id}`, data)
.then((res) => res)
.catch((error) => console.log(error))


export const searchClient = async (query) => AuthorizedApiService.get(`clients/search/${query}`)
.then((res) => res)
.catch((error) => {error})