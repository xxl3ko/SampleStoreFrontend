import {GET_PACKS} from "../Actions/actions";

const initialState = {
    packs: []
}

export const packsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACKS:
            return {
                ...state,
                packs: action.payload
            };
        default:
            return state
    }
}

