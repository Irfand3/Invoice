export const types = {
    GET_CLIENTS : "GET_CLIENTS",
    SET_CLIENTS : "SET_CLIENTS",
    SET_CURRENT_PAGE : "SET_CURRENT_PAGE",
    ADD_CLIENT : "ADD_CLIENT",
    SET_CLIENT_TOTAL_AMOUNT : "SET_CLIENT_TOTAL_AMOUNT"
}

export const getClients  = () => ({
    type: types.GET_CLIENTS,
})

export const setClients = (clients) => ({
    type: types.SET_CLIENTS,
    payload: clients
})

export const setCurrentPage = (page) => ({
    type: types.SET_CURRENT_PAGE,
    payload: page
})

export const addNewClient = (newClient) => ({
    type: types.ADD_CLIENT,
    payload: newClient
})

export const setClientTotalAmount = (amount, clientID , sign) => ({
    type: types.SET_CLIENT_TOTAL_AMOUNT,
    payload: {
        amount,
        clientID,
        sign
    }
})



