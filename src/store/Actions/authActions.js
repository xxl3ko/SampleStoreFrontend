import {createUserRequest} from "../../api/authApi";


export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const ONCHANGE_REGISTER_DATA = 'ONCHANGE_REGISTER_DATA'
export const ONCHANGE_REGISTER_PASSWORD = 'ONCHANGE_REGISTER_PASSWORD'



export const createUser = (config) => {
    return async dispatch => {
        const response = await createUserRequest(config)
        dispatch({
            type: CREATE_USER_SUCCESS,
        })
    }
}

