import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {sampleReducer} from "./sampleReducer";

export const rootReducer = combineReducers({
    player: playerReducer,
    sample: sampleReducer,
})