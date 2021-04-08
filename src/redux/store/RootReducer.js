import { combineReducers } from "redux";
import { FormReducer } from "./reducers/Form";

export const rootReducer = combineReducers({
  Form: FormReducer,
});
