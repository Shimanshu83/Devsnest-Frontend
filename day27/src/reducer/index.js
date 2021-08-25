import TodoReducer from "./todoReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers(
    {
        todo:TodoReducer
    }
);
export default rootReducer;