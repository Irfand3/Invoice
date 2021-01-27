import axios from "axios"

const url = "http://localhost:5000/api/"
const defaultOptions = () => ({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
});
const userInfo = JSON.parse(localStorage.getItem("userInfo"))
const getToken = () => `Bearer ${userInfo}`

export const ApiService = axios.create(defaultOptions());
export const AuthorizedApiService = axios.create(defaultOptions())
AuthorizedApiService.interceptors.request.use(
  (req) => {
    req.headers.Authorization = getToken();
    return req;
  },
);
