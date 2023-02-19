import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {samplepacksReducer} from "./samplepacksReducer";
import {packReducer} from "./packReducer";
import {samplesReducer} from "./samplesReducer";


export const rootReducer = combineReducers({
    sample_packs: samplepacksReducer,
    pack: packReducer,
    samples: samplesReducer,
    player: playerReducer,
})