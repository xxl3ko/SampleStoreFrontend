import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {packsReducer} from "./packsReducer";
import {packReducer} from "./packReducer";
import {samplesReducer} from "./samplesReducer";
import {userReducer} from "./userReducer";
import {relationReducer} from "./relationReducer";



export const rootReducer = combineReducers({
    packs: packsReducer,
    pack: packReducer,
    samples: samplesReducer,
    player: playerReducer,
    user: userReducer,
    rels: relationReducer,
})