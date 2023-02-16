import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {samplepackReducer} from "./samplepackReducer";
import {samplepacksReducer} from "./samplepacksReducer";
import {samplesReducer} from "./samplesReducer";

export const rootReducer = combineReducers({
    sample_packs: samplepacksReducer,
    sample_pack: samplepackReducer,
    samples: samplesReducer,
    player: playerReducer,
})