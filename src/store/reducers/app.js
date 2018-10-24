//configuration to app.

import {
    WEB_INDEX
} from '../actions/actionTypes';

import { updateObj } from '../utility';

const initialState = {
    token:"",
    message:"",
    isLogedIn:false
}



const reducer = (state=initialState, action) => {
    switch(action.type){
        case WEB_INDEX:
            let updateObject = {
                token:action.payload.token,
                message:action.payload.message,
                isLogedIn:action.payload.isLogedIn
            }
            return {
                ...state,
                token:action.payload.token,
                message:action.payload.message,
                isLogedIn:action.payload.isLogedIn

            }
        default:
            return initialState;
    }
}
export default reducer;