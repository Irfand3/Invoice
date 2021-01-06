import {REGISTER_USER_REQUEST} from "../../../actions/types"

export const registerUser = (newUser) => {
    return (dispatch) => {
        dispatch({
            type:REGISTER_USER_REQUEST,
            payload:newUser
        })
    }
}