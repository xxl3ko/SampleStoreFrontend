import {userRequest} from "../../api/userApi";

export const GET_USER = 'GET_USER'

export const getUser = (config) => {
    return async dispatch => {
        const response = await userRequest(config)
        dispatch({
            type: GET_USER,
            payload: response.data,
        })
    }
}