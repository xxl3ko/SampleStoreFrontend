import {GET_PACK_SUCCESS} from "../Actions/packsActions";

const initialState = {
    samples: [],
    rels: [],
    label: {},
    genre: {},
}

export const packReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACK_SUCCESS:
            return {
                ...action.payload,
            };
        default:
            return state
    }
}
