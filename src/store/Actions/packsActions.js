import {packRequest, packsRequest} from "../../api/samplepacks";
import {samplesRequest} from "../../api/samples";
//import {labelRequest} from "../../api/labelsApi";
//import {GET_LABEL_FAILURE, GET_LABEL_SUCCESS} from "./labelsActions";

export const GET_PACKS_SUCCESS = 'GET_PACKS_SUCCESS'
export const GET_PACK_SUCCESS = 'GET_PACKS_SUCCESS'
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
            const packResponse = await packRequest(id)
            dispatch({
                type: GET_PACK_SUCCESS,
                payload: packResponse.data
            })
            /*const labelResponse = await labelRequest(1)
            console.log(labelResponse.data)
            dispatch({
                type: GET_LABEL_SUCCESS,
                payload: labelResponse.data
            })*/
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
