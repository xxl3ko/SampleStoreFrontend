import {CREATE_USER_SUCCESS, ONCHANGE_REGISTER_DATA, ONCHANGE_REGISTER_USERNAME} from "../Actions/authActions";

const initialState = {
    username: '',
    password: '',
}

export const createUserFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return {
                username: '',
                password: '',
            };
        case ONCHANGE_REGISTER_DATA:
            return {
                username: action.payload.username,
                password: action.payload.password,
            }

        default:
            return state
    }
}