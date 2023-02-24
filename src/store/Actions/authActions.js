import {createUserRequest} from "../../api/authApi";


export const CREATE_USER = 'CREATE_USER'


export const createUser = (config) => {
    return async dispatch => {
        const response = await createUserRequest(config)
        dispatch({
            type: CREATE_USER,
            payload: response.data
        })
    }
}