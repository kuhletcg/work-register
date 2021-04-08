import { createStore } from "redux";
import { rootReducer } from "../rootreducer";

export const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
