import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./Reducers/rootReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))