import {GET_SAMPLES} from "../Actions/actions";

const initialState = {
    samples: [],
}

export const samplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SAMPLES:
            return {
                samples: action.payload,
            };
        default:
            return state
    }
}
