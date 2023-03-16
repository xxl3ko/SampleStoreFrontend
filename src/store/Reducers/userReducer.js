import {
    GET_USER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from "../Actions/userActions";

const token = localStorage.getItem('token')

const initialState = {
    isLogged: !!token,
    signup_error: {
        username: [],
        email: [],
        password: []
    },
    login_error: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                signup_error: {
                    username: action.payload.username,
                    email: action.payload.email,
                    password: action.payload.password
                },
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                login_error: action.payload,
            };
        case GET_USER:
            return {
                ...state,
                ...action.payload
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogged: false,
            };
        default:
            return state
    }
}