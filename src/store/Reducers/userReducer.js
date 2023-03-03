import {GET_USER, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../Actions/userActions";

const token = localStorage.getItem('token')

const initialState = {
    isLogged: !!token

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
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