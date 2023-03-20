import {labelRequest} from "../../api/labelsApi";

export const GET_LABEL_SUCCESS = 'GET_LABEL_SUCCESS'
export const GET_LABEL_FAILURE = 'GET_LABEL_FAILURE'

export const getLabel = (config) => {
    return async dispatch => {
        try {
            const response = await labelRequest(config)
            dispatch({
                type: GET_LABEL_SUCCESS,
                payload: response.data,
            })
        } catch (error) {
            dispatch({
                type: GET_LABEL_FAILURE,
                payload: error.response.data,
            })
        }
    }
}
