import {combineReducers} from "redux";
import {postsReducer} from "./postsReduser";

export const Reducer = combineReducers({
    posts: postsReducer
})