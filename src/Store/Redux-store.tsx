import { combineReducers, createStore } from "redux";
import UserPageReducer, {PostDataState, UserPageState} from "./UserPageReducer";

let reducers = combineReducers<State>({
    UserPage: UserPageReducer,
})

export interface State {
    UserPage:UserPageState & PostDataState
}

let store = createStore(reducers)

export default store