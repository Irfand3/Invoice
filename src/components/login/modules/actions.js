import {LOGOUT_USER_REQUEST, LOGIN_USER_REQUEST} from "../../../actions/types"

export const loginUser = (user) => {
    return(dispatch) => {
        dispatch({
            type:LOGIN_USER_REQUEST,
            payload:user
        })
    }
}

export const logoutUser = () => {
    return(dispatch) => {
        dispatch({
            type:LOGOUT_USER_REQUEST,
        })
    }
}
