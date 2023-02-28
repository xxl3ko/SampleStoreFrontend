import {GET_USER} from "../Actions/userActions";

const initialState = {}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state
    }
}