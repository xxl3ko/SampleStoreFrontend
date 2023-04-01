import {sampleRelationRequest} from "../../api/relationApi";

export const PATCH_FAVORITE_SUCCESS = 'PATCH_FAVORITE_SUCCESS'

export const sampleRelation = (data) => {
    return async dispatch => {
        try {
            const response = await sampleRelationRequest(data.request)
            console.log(response.data)
            dispatch({
                type: PATCH_FAVORITE_SUCCESS,
                payload: {
                    data: response.data,
                    sampleIndex: data.sampleIndex,
                },
            })
        } catch
            (error) {
            console.log(error)
        }
    }
}