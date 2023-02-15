import {packRequest} from "../../api/sm_board";

export const POST_PLAYER = 'POST_PLAYER'
export const GET_PACK = 'GET_PACK'

//console.log(packRequest())

export const getPacks = () => {
    return async dispatch => {
        const response = packRequest()
        dispatch({
            type: GET_PACK,
            payload: 'response.data'
        })
    }
}


// export const getPack = (packs) => ({
//    type: GET_PACK,
//    payload: 'packs'
//})