export const types = {
    REGISTER_USER: "REGISTER_USER",
    REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
    LOGIN_USER:"LOGIN_USER",
    LOGIN_USER_SUCCESS:"LOGIN_USER_SUCCESS",
    LOGGED_USER :"LOGGED_USER",
    SET_LOGGED_USER :"SET_LOGGED_USER",
    LOGOUT_USER : "LOGOUT_USER"
}

export const registerUser = (user) => ({
    type: types.REGISTER_USER,
    payload: user
})

export const loginUser = (user) => ({
    type: types.LOGIN_USER,
    payload: user
})

export const loginUserSuccess = (token) => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: token
})

export const loggedUser = () => ({
    type: types.LOGGED_USER
})

export const setLoggedUser = (user) => ({
    type:types.SET_LOGGED_USER,
    payload:user
})

export const logoutUser = () => ({
    type:types.LOGOUT_USER
})