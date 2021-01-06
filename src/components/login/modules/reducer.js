import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, LOGOUT_USER_SUCCESS, LOGOUT_USER_REQUEST, LOGOUT_USER_FAIL} from "../../../actions/types"
export const loginUserReducer = (state = { user: {}, loggedIn:false, loading:false, error:null }, action) => {
    switch(action.type){
    case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                loggedIn:true,
                loading:false,
                user: action.payload                
            }
        case LOGIN_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload               
            }    
            default: 
            return {
                ...state
         }

        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                user:{},
                loggedIn:false
            }
        case LOGOUT_USER_FAIL:
            return {
                ...state,
                error:action.payload,
            }
}
}
