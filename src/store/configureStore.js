import { createStore,combineReducers } from "redux";

//All reducers
import authReducer from './reducers/auth';
import appReducer from './reducers/app';
import programReducer from './reducers/program';
const rootReducer = combineReducers({
    'auth':authReducer,
    'app':appReducer,
    'program':programReducer
});
const configureStore = (config)=>{
    return createStore(rootReducer,config);
}
export default configureStore;