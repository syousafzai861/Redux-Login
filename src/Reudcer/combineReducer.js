import {combineReducers} from "redux";
import homeReducer from "./homeReducer";
import loginreducer from './loginreducer';


const rootReducer = combineReducers({
    homglobal: homeReducer,
    loginglobal: loginreducer,
});

export default rootReducer;