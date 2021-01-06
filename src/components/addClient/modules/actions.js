import {SAVE_CLIENT_REQUEST} from "../../../actions/types"

export const saveClient = (client) => {
    return (dispatch) => {
        dispatch({
            type:SAVE_CLIENT_REQUEST,
            payload:client
        })
    }
}