import { combineReducers, createStore } from "redux";
import UserPageReducer, {UserPageState} from "./UserPageReducer";

let reducers = combineReducers<State>({
    UserPage: UserPageReducer,
})

export interface State {
    UserPage:UserPageState
}

let store = createStore(reducers)

export default store