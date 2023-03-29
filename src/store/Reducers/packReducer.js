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
            state.samples.map((sample, index) => {
                if (sample.id === action.payload.sample) {
                    state.samples[index].rels[0] = action.payload
                }
            })
            //state.samples.filter((sample, index) => {sample.id === action.payload.sample})

            return state
        default:
            return state
    }
}


