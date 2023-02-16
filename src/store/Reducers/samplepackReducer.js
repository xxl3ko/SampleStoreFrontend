import {GET_PACK} from "../Actions/actions";

const initialState = {
    sample_pack: {},
}

export const samplepackReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACK:
            return {
                sample_pack: action.payload,
            };
        default:
            return state
    }
}
