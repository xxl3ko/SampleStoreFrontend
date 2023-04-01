import {GET_PACK_SUCCESS} from "../Actions/packsActions";
import {PATCH_FAVORITE_SUCCESS} from "../Actions/relationActions";

const initialState = {
    samples: [], rels: [], label: {}, genre: {},
}

export const packReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACK_SUCCESS:
            return {
                ...action.payload,
            };
        case PATCH_FAVORITE_SUCCESS:
            state.samples[action.payload.sampleIndex].rels[0] = action.payload.data
            return {
                ...state,
                /*samples: state.samples.map((sample) => {
                    if (sample.id === action.payload.sample) {
                        sample.rels[0] = action.payload
                    }
                    return sample
                })*/
            }
        default:
            return state
    }
}


