import {GET_PACKS} from "../Actions/actions";

const initialState = {
    sample_packs: []
}

export const samplepacksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACKS:
            return {
                ...state,
                sample_packs: action.payload
            };
        default:
            return state
    }
}

