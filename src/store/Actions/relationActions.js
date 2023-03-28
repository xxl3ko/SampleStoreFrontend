import {sampleRelationRequest} from "../../api/relationApi";

//export const ADD_SAMPLE_TO_CART = 'ADD_SAMPLE_TO_CART'
export const GET_IS_FAVORITE_SUCCESS = 'GET_IS_FAVORITE_SUCCESS'

/*export const addSampleToCart = (data) => {
    console.log(data)
}*/

export const sampleRelation = (data) => {
    return async dispatch => {
        try {
            const response = await sampleRelationRequest(data)
            dispatch({
                type: GET_IS_FAVORITE_SUCCESS,
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

