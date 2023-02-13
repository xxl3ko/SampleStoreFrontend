import {POST_PLAYER} from "./actions";

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