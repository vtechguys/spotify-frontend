import {
    WEB_INDEX,
    RESET_MESSAGE
} from './actionTypes';

import API from '../../axiosRoot';
import storage from '../../utils/localStorage';

import { signInSync } from './auth'
//API_URLS REGISTERED
import { apiUrls } from '../../config/registeredUrls';


//Sync call reducer actions
export const webIndexSync = (token,message,isLogedIn,loadingState) => {
    return {
        type:WEB_INDEX,
        payload:{
            message:message,
            token:token,
            isLogedIn:isLogedIn,
            loadingState:loadingState
        }
}
}
//Asunc call
export const webIndexAsync = (token) =>{
   return (dispatch) => {
        API
        .post(apiUrls.WEB_INDEX,{})
        .then(success=>{
            let data = success.data;
            if(data.code===200 && data.success===true){
                //console.log("previous token ",storage.get("token"));
                storage.store("token",data.data.profile.sessionId);
                //console.log("new token ",storage.get("token"));
                let message = data.message;
                let isLogedIn = true;
                let profile = data.data.profile
                dispatch( signInSync(profile) );
                dispatch( webIndexSync(token,message,isLogedIn,false) );
            }
            else{
                let message = data.message;
                let token = "";
                let isLogedIn = false;
                dispatch(webIndexSync( token,message,isLogedIn,false));
            }
        })
        .catch(error=>{
            //console.log("Error Occured",error);

            let message = "Some error has occured.Please Confirm your Interent connection.";
            let token = "";
            let isLogedIn = false;
            dispatch(webIndexSync( token,message,isLogedIn,false));      
        })
   } 
}

export const resetMessageState = (message) =>{//toggle is Message visible and reset to incomming Message else ""
    return {
        type:RESET_MESSAGE,
        payload:{
            message:message||"Please Make sure you are connected to network."
        }
    }
}