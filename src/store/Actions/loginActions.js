import {loginRequest} from "../../api/loginApi";


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const ONCHANGE_LOGIN_DATA = 'ONCHANGE_LOGIN_DATA'



export const loginUser = (config) => {
    return async dispatch => {
        const response = await loginRequest(config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data,
        })
    }
}