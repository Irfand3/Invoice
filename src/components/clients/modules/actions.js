import {GET_ALL_CLIENTS, SET_CURRENT_CLIENT, SEARCH_CLIENT_REQUEST, SET_CURRENT_PAGE} from "../../../actions/types"

export const getAllClients  = () => {
    return (dispatch) => {
        dispatch({
            type:GET_ALL_CLIENTS,
        })
    }
}
export const setCurrentClient = (client) => {
    return (dispatch) => {
        dispatch({
            type:SET_CURRENT_CLIENT,
            payload:client
        })
    }
}


export const setCurrentPage = (page) => {
    return (dispatch) => {
        dispatch({
            type:SET_CURRENT_PAGE,
            payload:page
        })
    }
}