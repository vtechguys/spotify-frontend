import {
    SIGN_IN
} from './actionTypes';

//API ROOT CALL
import API from '../../axiosRoot';
//API_URLS REGISTERED
import { apiUrls } from '../../config/registeredUrls';

//uuid package for unique session on each device
import uuid from 'uuid/v4';
//Save to localhost
import storage from '../../utils/localStorage';






//Redux is sync so redux thunk come into play it stops dispatch for 
//a while till you explicitly dispatch it again.So Async code can be performed here
export const signInSync = (profile) =>{
    return {
        type: SIGN_IN,
        payload:profile
    }
}
//Redux thunk for aync operation
export const signInAsync = (profile) => {

    return dispatch => {

        const signInObj = {};
        signInObj["email"] = profile.email;
        signInObj["password"] = profile.password;
        signInObj["uuid"] = uuid();

        API
        .post(apiUrls.SIGN_IN,signInObj)
        .then(success=>{
            var data = success.data;
            if(data.code===200 && data.success===true){
                storage.store("token",data.profile.sessionId);
                dispatch(signInSync(data.profile));
            }
            else{

            }
        })
        .catch(error=>{
            console.log("Error while requesting to ",apiUrls.SIGN_IN,"error",error);
        })


    }
}


