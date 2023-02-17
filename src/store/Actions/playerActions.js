export const SET_PLAYER_SRC = 'SET_PLAYER_SRC'

export const setPlayerSrc = (config) => {
    return {
        type: SET_PLAYER_SRC,
        payload: config,
    }
}