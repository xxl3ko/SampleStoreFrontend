import {GET_PACK_SUCCESS} from "../Actions/packsActions";

const initialState = {
    pack: {},
}

export const packReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACK_SUCCESS:
            return {
                pack: action.payload,
            };
        default:
            return state
    }
}
