import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {samplepacksReducer} from "./samplepacksReducer";
import {packReducer} from "./packReducer";
import {samplesReducer} from "./samplesReducer";
import {createUserFormReducer} from "./createUserFormReducer";
import {loginReducer} from "./loginReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    sample_packs: samplepacksReducer,
    pack: packReducer,
    samples: samplesReducer,
    player: playerReducer,
    create_user: createUserFormReducer,
    login: loginReducer,
    user: userReducer,
})