import {
    CREATE_PROGRAM,
    UPDATE_PROGRAM,
    LOAD_PROGRAM_BY_ID,
    LOAD_PROGRAMS,
    DELETE_PROGRAM,
    TOGGLE_PROGRAM,


    
} from './actionTypes';

//API ROOT CALL
import API from '../../axiosRoot';
//API_URLS REGISTERED
import { apiUrls } from '../../config/registeredUrls';

import { resetMessageState } from './index';

//Sync createProgram
const createProgramSync = (errors=null) =>{
    return {
        type:CREATE_PROGRAM,
        errors:errors
    }
}
//Async createProgram
export const createProgramAsync = (program) =>{
    return dispatch =>{
        //console.log("API CALL TO ",apiUrls.CREATE_PROGRAM);
        API
        .post(apiUrls.CREATE_PROGRAM,program)
        .then(success=>{
            var response = success.data;
            //console.log("Response",response);
            if(response.code===200 && response.success===true){
                dispatch( resetMessageState(response.message) );
                dispatch( createProgramSync(response.errors) );


            }
            else{
                dispatch( resetMessageState(response.message) );

                dispatch( createProgramSync(response.errors ));
            }
            
            //vfvf
        })
        .catch(error=>{
            //console.log(`Error occured while API call to ${apiUrls.CREATE_PROGRAM}.Error is ${error}`);
            dispatch( resetMessageState() );
        })
    }
}
//console.log("");