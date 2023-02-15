import {POST_PLAYER} from "../Actions/actions";

const initialState = {
    src: ''
}


export const sampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_PLAYER:
            return {};
        default:
            return state
    }
}