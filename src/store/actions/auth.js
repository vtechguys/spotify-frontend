import {
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP
} from './actionTypes';
//import nprogress from 'nprogress';
//API ROOT CALL
import API from '../../axiosRoot';//Make it without auth header
//API_URLS REGISTERED
import { apiUrls } from '../../config/registeredUrls';

//uuid package for unique session on each device
import uuid from 'uuid/v4';
//Save to localhost
import storage from '../../utils/localStorage';





//Redux is sync so redux thunk come into play it stops dispatch for 
//a while till you explicitly dispatch it again.So Async code can be performed here
export const signInSync = (profile) =>{
    console.log(profile);
    return {
        type: SIGN_IN,
        payload:profile
    }
}
//Redux thunk for aync operation
export const signInAsync = (profile) => {
console.log(profile);
    return dispatch => {
        console.log("inside dispatch");
        const signInObj = {};
        signInObj["email"] = profile.email;
        signInObj["password"] = profile.password;
        signInObj["uuid"] = uuid();
        API.post(apiUrls.SIGN_IN,signInObj)
        .then(success=>{
            var data = success.data;
            console.log(success);
            if(data.code===200 && data.success===true){
                console.log("inside sucess",data);
                storage.store("token",data.data.profile.sessionId);
                dispatch(signInSync(data.data.profile));
        }
            else{
                console.log("inside else");
            }
        })
        .catch(error=>{
            console.log("inside catch",error);
            
            //console.log("Error while requesting to ",apiUrls.SIGN_IN,"error",error);
        })


    }
}
export const signUpSync=(data)=>{
return {
    type:SIGN_UP,
    payload:data
}
}
export const signUpAsync=(profile)=>{
return (dispatch)=>{
    API.post(apiUrls.SIGN_UP,profile).then((success)=>{
        var data=success.data;
        if(data.code===200 && data.success===true)
        {
          dispatch(signUpSync({isSuccess:true,message:data.message}))
        }else{
         dispatch(signUpSync({isSuccess:false,message:data.message}))   
        }
    }).catch((err)=>{
        console.log("inside catch",err);
    })
}
}

//Redux is sync so redux thunk come into play it stops dispatch for 
//a while till you explicitly dispatch it again.So Async code can be performed here
const signOutSync = () =>{
    return {
        type: SIGN_OUT
    }
}
//Redux thunk for aync operation
export const signOutAsync = () => {

    return dispatch => {

        const signOutObj = {};
        

        API
        .post(apiUrls.SIGN_OUT,signOutObj)
        .then(success=>{
            var data = success.data;
            if(data.code===200 && data.success===true){
                storage.clear();
                dispatch( signOutSync() );
                dispatch( { type:'RESTORE', payload: { message: data.message } } );
                
            }
            else{
                dispatch( {type:'UNSUCCESSFULL',payload: { message: data.message } })
                ;
                //console.log("Else case",success);
            }
        })
        .catch(error=>{
            
            //console.log("Error while requesting to ",apiUrls.SIGN_OUT,"error",error);
        })


    }
}
