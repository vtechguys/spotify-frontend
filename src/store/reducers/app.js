//configuration to app.

import {
    WEB_INDEX
} from '../actions/actionTypes';

import { updateObj } from '../utility';

const initialState = {
    token:"",
    message:"",
    isLogedIn:false,
    loadingState:false
}
const webIndexReducing = (state,action) =>{
    console.log("WEB_INDEX [appReducer]");
        let updateObject = {
            token:action.payload.token,
            message:action.payload.message,
            isLogedIn:action.payload.isLogedIn,
            loadingState:action.payload.loadingState
        }
        
        return updateObj(state,updateObject)
}

const restoreReducing = (state,action) => {
    console.log("RESTORE [appReducer]");
    let restoreObj = {
        token:'',
        message:action.payload.message,
        isLogedIn:false,
        loadingState:false
    }
    return updateObj(state,restoreObj);
}

const unsuccessfull = (state,action)=>{
    let unsuccessfullObj = {
        message:action.payload.message || 'Please Check your Internet Connection.'

    }
    return updateObj(state,unsuccessfullObj);
}





const reducer = (state=initialState, action) => {
    switch(action.type){

        case WEB_INDEX:
            return webIndexReducing(state,action);
            

        case 'RESTORE':
             return restoreReducing(state,action);
        case 'UNSUCCESSFULL'://unique to this only nowhere to be used
            return unsuccessfull(state,action);   
        default:
            console.log("default [appReducer]");
            return state;
    }
}
export default reducer;