import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {packsReducer} from "./packsReducer";
import {packReducer} from "./packReducer";
import {samplesReducer} from "./samplesReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    packs: packsReducer,
    pack: packReducer,
    samples: samplesReducer,
    player: playerReducer,
})