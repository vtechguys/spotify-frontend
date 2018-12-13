import {
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP
} from '../actions/actionTypes';


import { updateObj } from '../utility';

const initialState = {
    
    "role": "",
    "email": "",
    "userId": "",
    "name": "",
    "sessionId": "",
    "uuid": "",
    "createdAt": "",
    "errors":null
    
};




const signInReducing = (state,action) =>{
    //console.log("SIGN_IN [authReducer]");
    return updateObj(
        state
        ,
        {
        
        "role": action.payload.role,
        "email": action.payload.email,
        "userId": action.payload.userId,
        "name": action.payload.name,
        "sessionId": action.payload.sessionId,
        "uuid": action.payload.uuid,
        "createdAt": action.payload.createdAt
        }
    )
}

const signOutReducing = (state,action) => {
    //console.log("SIGN_OUT [authReducer]");
    return initialState;
}
const signUpReducing=(state,action)=>{
return updateObj(state,{isRegisterSuccessful:action.payload.isSuccess,message:action.payload.message})
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case SIGN_IN:
            return signInReducing(state,action);

        case SIGN_OUT:
            return signOutReducing(state,action);
         case SIGN_UP:
         return signUpReducing(state,action)
        case 'RESTORE':
            //console.log("RESTORE [authReducer]");
            return initialState;

        default:
            //console.log("deafault [authReducer]");
            return state;
        
    }
}
export default reducer;