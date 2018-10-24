import {
    WEB_INDEX
} from './actionTypes';

import API from '../../axiosRoot';
import storage from '../../utils/localStorage';



const webIndexSync = (token,message,isLogedIn) => {
    console.log("Fired");
    return {
        type:WEB_INDEX,
        payload:{
            message:message,
            token:token,
            isLogedIn:isLogedIn
        }
        

    }
}

export const webIndexAsync = (token) =>{
   return (dispatch,getState) => {
        API
        .post(WEB_INDEX,{})
        .then(success=>{
            let data = success.data;
            if(data.code===200 && data.success===true){
                storage.store("token",data.data.profile.sessionId);
                let message = data.message;
                let isLogedIn = true;
                let profile = data.data.profile
                let authState = {
                    "role": "",
                    "email": "",
                    "userId": "",
                    "name": "",
                    "sessionId": "",
                    "uuid": "",
                    "createdAt": ""
                }
                dispatch(webIndexSync(token,message,isLogedIn));
            }
            else{
                let message = data.message;
                let token = "checkingAPI";
                let isLogedIn = false;
                dispatch(webIndexSync(token,message,isLogedIn));
            }
        })
        .catch(error=>{
            console.log("Error Occured");
            throw error;
        })
   } 
}