import {GET_PACKS_SUCCESS} from "../Actions/packsActions";

const initialState = {
    packs: []
}

export const packsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACKS_SUCCESS:
            return {
                ...state,
                packs: action.payload
            };
        default:
            return state
    }
}

