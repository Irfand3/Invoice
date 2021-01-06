import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from "../../../actions/types"
let users = JSON.parse(localStorage.getItem("users") || "[]")

export const registerUserReducer = (state = {users:users, loading:false, error:null }, action) => {

    switch(action.type){

        case REGISTER_USER_REQUEST:
            return{
                ...state,
                loading:true,
            
            }
        case REGISTER_USER_SUCCESS:
            return{
                users: [...state.users, action.payload],
                loading:false,
                error:null
            }
        case REGISTER_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return{
                ...state
            }  
}
}