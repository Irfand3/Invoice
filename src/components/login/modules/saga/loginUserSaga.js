import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from "../../../../actions/types"
import {call, put, takeLatest, select} from 'redux-saga/effects'
import history from "../../../../history"

function* handleLogin(action){
    try {
        let users = JSON.parse(localStorage.getItem("users") || "[]")
        let match = false
        users.map(user => {
            if(user.email === action.payload.email && user.password === action.payload.password)
            {
                match=true
            }
        })
        if(match){
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
            yield put({type:LOGIN_USER_SUCCESS, payload:action.payload})
            history.push("/invoices") 
        }  
        else 
            yield put({type:LOGIN_USER_FAIL, payload:"Does not match any user"})
        
    } catch (error) {
        yield put({type:LOGIN_USER_FAIL, payload:error.message})
    }
   
}

function* loginSagaWatcher(){
    yield takeLatest(LOGIN_USER_REQUEST, handleLogin)
}

export default loginSagaWatcher