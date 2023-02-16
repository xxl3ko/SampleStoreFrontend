import {packRequest, packsRequest} from "../../api/samplepacks";

export const GET_PACKS = 'GET_PACKS'
export const GET_PACK = 'GET_PACK'
export const SET_PACK = 'SET_PACK'

export const getPacks = () => {
    return async dispatch => {
        const response = await packsRequest()
        dispatch({
            type: GET_PACKS,
            payload: response.data
        })
    }
}

/*export const setPack = (id) => {
    return ({
        type: SET_PACK,
        payload: String(id),
    })
}*/


export const getPack = (id) => {
    return async dispatch => {
        const response = await packRequest(id)
        dispatch({
            type: GET_PACK,
            payload: response.data
        })
    }
}