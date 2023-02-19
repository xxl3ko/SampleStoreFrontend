import {GET_PACK} from "../Actions/actions";

const initialState = {
    pack: {},
}

export const packReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PACK:
            return {
                pack: action.payload,
            };
        default:
            return state
    }
}
