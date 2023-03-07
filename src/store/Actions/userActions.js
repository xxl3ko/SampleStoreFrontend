import {
    loginRequest,
    logoutRequest,
    signupRequest,
    userRequest
} from "../../api/userApi";
import {redirect} from "react-router-dom";


export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const GET_USER = 'GET_USER'


export const signupUser = (config) => {
    return async dispatch => {
        const response = await signupRequest(config)
        dispatch({
            type: CREATE_USER_SUCCESS,
        })
    }
}

export const loginUser = (config) => {
    return async dispatch => {
        try {
            const response = await loginRequest(config)
            localStorage.setItem('token', response.data.auth_token)
            console.log(response)
            dispatch({
                type: LOGIN_SUCCESS
            })
            redirect('http://localhost:3000/packs')
        } catch (error) {
            console.log(error)
        }
    }
}

/*export const loginUser = (config) => {
    return async dispatch => {
        const response = await loginRequest(config)
        localStorage.setItem('token', response.data.auth_token)
        dispatch({
            type: LOGIN_SUCCESS
        })
    }
}*/

export const getUser = (config) => {
    return async dispatch => {
        const response = await userRequest(config)
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
            type: LOGOUT_SUCCESS
        })
    }
}

