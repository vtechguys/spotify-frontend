import { createStore,combineReducers } from "redux";

//All reducers
import authReducer from './reducers/auth';
import appReducer from './reducers/app';
const rootReducer = combineReducers({
    'auth':authReducer,
    'app':appReducer
});
const configureStore = (config)=>{
    return createStore(rootReducer,config);
}
export default configureStore;