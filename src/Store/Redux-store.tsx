import { combineReducers, createStore } from "redux";
import UserPageReducer, {CommentSectionState, PostDataState, UserPageState} from "./UserPageReducer";

let reducers = combineReducers<State>({
    UserPage: UserPageReducer,
})

export interface State {
    UserPage:UserPageState & PostDataState & CommentSectionState
}

let store = createStore(reducers)

export default store