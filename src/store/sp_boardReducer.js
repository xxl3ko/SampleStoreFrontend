import {GET_PACK} from "./actions";


const initialState = {
    sample_pack: []
}


export const sp_boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACK:
            return {
                ...state,
                sample_pack: action.payload
            };
        default:
            return state
    }
}