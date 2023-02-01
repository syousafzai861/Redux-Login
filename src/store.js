import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./Reudcer/combineReducer";


const middleware = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

let store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;
