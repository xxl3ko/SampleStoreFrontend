import {GET_LABEL_SUCCESS} from "../Actions/labelsActions";

const initialState = {
    label: {},
}

export const labelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LABEL_SUCCESS:
            return {
                label: action.payload,
            };
        default:
            return state
    }
}
