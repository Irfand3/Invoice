import {call, put, takeLatest} from 'redux-saga/effects'
import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, SET_USER_TO_REGISTER_NULL} from "../../../actions/types"
import history from "../../../history"

function* handleRegisterUser(action){
   try { 
    let users = JSON.parse(localStorage.getItem("users") || "[]")

         let same = false
         users.map(user => user.email === action.payload.email ? same=true : same)
        console.log(same)
          if(same===false){
            users.push(action.payload)
            localStorage.setItem("users", JSON.stringify(users))
            yield put({type:REGISTER_USER_SUCCESS, payload:action.payload})
            history.push("/login")
         } 
         else
         {
            yield put({type:REGISTER_USER_FAIL, payload:"Email already taken"})
         }
        

   } catch (error) {
       yield put({type:REGISTER_USER_FAIL, payload:error.message})
   }
}

function* watcherRegisterUser(){
    yield takeLatest(REGISTER_USER_REQUEST, handleRegisterUser)
}

export default watcherRegisterUser