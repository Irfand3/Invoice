import {types} from "../../../actions/auth"
export const authReducer = (state = { user: {}, loggedIn:false}, action) => {
    switch(action.type){
        
        case types.LOGIN_USER_SUCCESS:
            return {
                loggedIn:true,
                user:action.payload
            }
        case types.SET_LOGGED_USER:
            return{
                loggedIn:true,
                user:action.payload
            }
        
        default: 
            return {
                ...state
         }

        
}
}
