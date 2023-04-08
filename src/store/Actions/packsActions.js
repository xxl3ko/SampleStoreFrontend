import {packRequest, packsRequest} from "../../api/packsApi";
import {samplesRequest} from "../../api/samplesApi";

export const GET_PACKS_SUCCESS = 'GET_PACKS_SUCCESS'
export const GET_PACK_SUCCESS = 'GET_PACK_SUCCESS'
export const GET_SAMPLES = 'GET_SAMPLES'

export const getPacks = () => {
    return async dispatch => {
        try {
            const response = await packsRequest()
            dispatch({
                type: GET_PACKS_SUCCESS,
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}


export const getPack = (id) => {
    return async dispatch => {
        try {
            const response = await packRequest(id)
            dispatch({
                type: GET_PACK_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSamples = (config) => {
    return async dispatch => {
        const response = await samplesRequest(config)
        dispatch({
            type: GET_SAMPLES,
            payload: response.data
        })
    }
}
