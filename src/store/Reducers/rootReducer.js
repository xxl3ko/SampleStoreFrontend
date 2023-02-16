import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {samplepackReducer} from "./samplepackReducer";
import {samplepacksReducer} from "./samplepacksReducer";

export const rootReducer = combineReducers({
    sample_packs: samplepacksReducer,
    sample_pack: samplepackReducer,
    player: playerReducer,


})