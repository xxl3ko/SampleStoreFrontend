import {
    loginRequest,
    logoutRequest,
    signupRequest,
    userRequest
} from "../../api/userApi";


export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const GET_USER = 'GET_USER'


export const signupUser = (config) => {
    return async dispatch => {
        try {
            const response = await signupRequest(config)
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data,
            })
        } catch (error) {
            dispatch({
                type: SIGNUP_FAILURE,
                payload: error.response.data,
            })
        }
    }
}

export const loginUser = (config) => {
    return async dispatch => {
        try {
            const response = await loginRequest(config)
            localStorage.setItem('token', response.data.auth_token)
            dispatch({
                type: LOGIN_SUCCESS
            })
        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.response.data.non_field_errors
            })
        }
    }
}

export const getUser = () => {
    return async dispatch => {
        const response = await userRequest()
        dispatch({
            type: GET_USER,
            payload: response.data,
        })
    }
}

export const logoutUser = (config) => {
    return async dispatch => {
        const response = await logoutRequest(config)
        localStorage.removeItem('token')
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: response.data,
        })
    }
}

