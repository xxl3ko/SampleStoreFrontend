import {
    createUserRequest,
    loginRequest,
    logoutRequest,
    userRequest
} from "../../api/userApi";

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const GET_USER = 'GET_USER'

export const ONCHANGE_REGISTER_DATA = 'ONCHANGE_REGISTER_DATA'


export const createUser = (config) => {
    return async dispatch => {
        const response = await createUserRequest(config)
        dispatch({
            type: CREATE_USER_SUCCESS,
        })
    }
}

export const loginUser = (config) => {
    return async dispatch => {
        const response = await loginRequest(config)
        //const history = useHistory()
        localStorage.setItem('token', response.data.auth_token)
        dispatch({
            type: LOGIN_SUCCESS
        })
        //history.push('/welcome')
    }
}

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

