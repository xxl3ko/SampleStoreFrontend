import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {sampleReducer} from "./sampleReducer";
import {sp_boardReducer} from "./sp_boardReducer";

export const rootReducer = combineReducers({
    player: playerReducer,
    sample: sampleReducer,
    sp_board: sp_boardReducer,
})