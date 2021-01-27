import {
    all,
    call,
    takeLeading,
    put,
    takeLatest,
    delay,
    select,
    takeEvery,
} from 'redux-saga/effects';
import history from "../history"
import { notification } from 'antd';
import {getLoggedUser} from "../services/authService"
import {types,loginUserSuccess,setLoggedUser} from "../actions/auth"
import { authService } from "../services/authService";



function * register(action){
    const {name, email, password} = action.payload
    const postData = {
        name,
        email,
        password
    }
    const { data, error } = yield call(authService, 'register', postData);
    
    if(error){

        notification.error({
            message:"Register User Fail",
            description:error
        })
        return
    }
    else
        notification.success({
            message:"User Registered!",
            description:data.message
        })
    yield delay(500)
    history.push("/login")
}

function * login(action) {
    
    const {email, password} = action.payload
    const postData = {
        email,
        password
    }
    
    const {data, error} = yield call(authService, 'login', postData)
    if (error) {
        notification.error({
            message:"Invalid Email or Password",
        })
        return
    }
    else if (data) {
        notification.success({
            message:"Logged in!",
        })
    console.log(data)
    localStorage.setItem("userInfo", JSON.stringify(data.token))
    yield delay(500)
    history.push("/")
    //reload da ocita useEffect iz App.js
    window.location.reload()
    }
    
}

function * getUser() {
    const {data, error} = yield call(getLoggedUser)
    if (error) {
        notification.error({
            message:"Couldn't retreive User",
            description:error
        })
        return
    }
    console.log(data)
   yield put(setLoggedUser(data))
}

function * logout() {
    if (localStorage.getItem('userInfo')) {
        localStorage.removeItem('userInfo')
        history.push('login')
        notification.success({
            message:"Logged out!",
        })
    }
    else
    notification.error({
        message:"Couldn't load User from localStorage",
    })
}

export default function * authSaga() {
    yield all([
        takeLeading(types.REGISTER_USER, register),
        takeLeading(types.LOGIN_USER, login),
        takeEvery(types.LOGGED_USER, getUser),
        takeLeading(types.LOGOUT_USER, logout)
    ])
}

