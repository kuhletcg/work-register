import { createStore, combineReducers } from "redux";
import FormReducer from "./redux/reducers/FormReducer";

const rootReducer = combineReducers({
  Form: FormReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
