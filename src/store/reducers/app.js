//configuration to app.

import {
    WEB_INDEX,
    RESET_MESSAGE
} from '../actions/actionTypes';

import { updateObj } from '../utility';

const initialState = {
    token:"",
    message:"",
    isLogedIn:false,
    loadingState:false
}
const webIndexReducing = (state,action) =>{
    //console.log("WEB_INDEX [appReducer]");
        let updateObject = {
            token:action.payload.token,
            message:action.payload.message,
            isLogedIn:action.payload.isLogedIn,
            loadingState:action.payload.loadingState
        }
        
        return updateObj(state,updateObject)
}

const restoreReducing = (state,action) => {
    //console.log("RESTORE [appReducer]");
    let restoreObj = {
        token:'',
        message:action.payload.message,
        isLogedIn:false,
        loadingState:false
    }
    return updateObj(state,restoreObj);
}

const resetMessage = (state,action)=>{
    let unsuccessfullObj = {
        message:action.payload.message

    }
    return updateObj(state,unsuccessfullObj);
}





const reducer = (state=initialState, action) => {
    switch(action.type){

        case WEB_INDEX:
            return webIndexReducing(state,action);
        case RESET_MESSAGE:
            return resetMessage(state,action);   
        default:
            //console.log("default [appReducer]");
            return state;
    }
}
export default reducer;