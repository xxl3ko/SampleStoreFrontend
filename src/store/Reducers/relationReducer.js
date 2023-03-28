import {GET_IS_FAVORITE_SUCCESS} from "../Actions/relationActions";

const initialState = []
export const relationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IS_FAVORITE_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
