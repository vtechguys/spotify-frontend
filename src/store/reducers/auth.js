import {
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP
} from '../actions/actionTypes';




const initialState = {
    
    "role": "",
    "email": "",
    "userId": "",
    "name": "",
    "sessionId": "",
    "uuid": "",
    "createdAt": ""
    
};
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case SIGN_IN:
            return {
                ...state,
                "role": action.payload.role,
                "email": action.payload.email,
                "userId": action.payload.userId,
                "name": action.payload.name,
                "sessionId": action.payload.sessionId,
                "uuid": action.payload.uuid,
                "createdAt": action.payload.createdAt
            }
        
        default:
            return initialState
        
    }
}
export default reducer;