import {combineReducers} from "redux";
import {labelsReducer} from "./labelsReducer";
import {playerReducer} from "./playerReducer";
import {packsReducer} from "./packsReducer";
import {packReducer} from "./packReducer";
import {samplesReducer} from "./samplesReducer";
import {userReducer} from "./userReducer";



export const rootReducer = combineReducers({
    label: labelsReducer,
    packs: packsReducer,
    pack: packReducer,
    samples: samplesReducer,
    player: playerReducer,
    user: userReducer,
})