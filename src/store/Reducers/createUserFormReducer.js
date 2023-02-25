import {CREATE_USER} from "../Actions/authActions";

const initialState = {
    username: '',
    password: '',
}

export const createUserFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                username: '',
                password: '',
            };
        default:
            return state
    }
}