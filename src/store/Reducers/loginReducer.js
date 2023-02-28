import {LOGIN_SUCCESS, ONCHANGE_LOGIN_DATA} from "../Actions/loginActions";

const initialState = {
    username: '',
    password: '',
    token: '',
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                username: '',
                password: '',
                token: action.payload.auth_token,
            };
        case ONCHANGE_LOGIN_DATA:
            return {
                username: action.payload.username,
                password: action.payload.password,
            }
        default:
            return state
    }
}