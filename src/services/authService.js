import axios from "axios"
import {ApiService, AuthorizedApiService} from "./apiService"

export const authService = async (path, data) => ApiService.post(`users/${path}`, data)
.then((res) => res)
.catch((err)=> ({error:err.response.data.message}))

export const getLoggedUser = async () => AuthorizedApiService.get(`users/loggedUser`)
.then((res) => res)
.catch((err)=> ({error:err.response.data.message}))
