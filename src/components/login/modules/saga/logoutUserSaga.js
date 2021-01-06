import {LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL} from '../../../../actions/types'
import {call, put, takeLatest, select, takeEvery} from 'redux-saga/effects'

function* handleLogoutUser(){
    try {
        localStorage.removeItem("userInfo")
        yield put({type:LOGOUT_USER_SUCCESS, payload:"User Logged Out"})
    } catch (error) {
       yield put({type:LOGOUT_USER_FAIL, payload:error.message}) 
    }
}


function* watcherLogoutUser(){
    yield takeEvery(LOGOUT_USER_REQUEST, handleLogoutUser)
}

export default watcherLogoutUser