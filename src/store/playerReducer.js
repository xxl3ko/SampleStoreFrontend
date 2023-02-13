const initialState = {
    src: ''
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PLAYER_SRC":
            return  {...state, src: 'bar'};
        default:
            return state
    }
}