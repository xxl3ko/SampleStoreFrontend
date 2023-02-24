import {packRequest, packsRequest} from "../../api/samplepacks";
import {samplesRequest} from "../../api/samples";

export const GET_PACKS = 'GET_PACKS'
export const GET_PACK = 'GET_PACK'
export const GET_SAMPLES = 'GET_SAMPLES'


export const getPacks = () => {
    return async dispatch => {
        const response = await packsRequest()
        dispatch({
            type: GET_PACKS,
            payload: response.data
        })
    }
}


export const getPack = (id) => {
    return async dispatch => {
        const response = await packRequest(id)
        dispatch({
            type: GET_PACK,
            payload: response.data
        })
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
