import {types} from "./actions"

const initialState = {
    clients:[],
    currentPage:[],
}

export const clientReducer = (state = initialState, action) => {

    switch(action.type){
        
        case types.SET_CLIENTS:
            return{
                ...state,
                clients: action.payload
            }
        case types.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:state.clients.slice(action.payload*8-8,action.payload*8)
            }
        default:
            return{
                ...state
            }
        
    }
        
       
}