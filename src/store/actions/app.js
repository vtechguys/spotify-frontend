import {
    WEB_INDEX
} from './actionTypes';

import API from '../../axiosRoot';
import storage from '../../utils/localStorage';

import { signInSync } from './auth'
//API_URLS REGISTERED
import { apiUrls } from '../../config/registeredUrls';

const webIndexSync = (token,message,isLogedIn,loadingState) => {
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
// const multipleStoreUpdate = (dispatch,...actionMethods) => {
//     // var actions =[];
//     // actionMethods.forEach(action=>{
//     //     actions.push(
//     //         dispatch(action)
//     //     )
//     // })
//     console.log("Promising for",actionMethods)
//     Promise.all([
//         dispatch( actionMethods[0] ),
//         dispatch( actionMethods[1] )
//     ]).then(success=>{
//         console.log("successfully done  many actions");
//     })
// }
export const webIndexAsync = (token) =>{
   return (dispatch,getState) => {
        API
        .post(apiUrls.WEB_INDEX,{})
        .then(success=>{
            let data = success.data;
            if(data.code===200 && data.success===true){
                storage.store("token",data.data.profile.sessionId);
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
            console.log("Error Occured");
            throw error;
        })
   } 
}