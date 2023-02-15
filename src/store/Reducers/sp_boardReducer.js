import {GET_PACK} from "../Actions/actions";


const initialState = {
    sample_pack: ''
}


export const sp_boardReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case GET_PACK:
            return {
                sample_pack: action.payload
            };
        default:
            return state
    }
}

