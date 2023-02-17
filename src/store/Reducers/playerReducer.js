import {SET_PLAYER_SRC} from "../Actions/playerActions";

const initialState = {
    src: ''
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_SRC:
            return {
                src: action.payload
            };
        default:
            return state
    }
}