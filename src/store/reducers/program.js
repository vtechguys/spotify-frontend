
import {
    CREATE_PROGRAM,
    UPDATE_PROGRAM,
    DELETE_PROGRAM,
    TOGGLE_PROGRAM,
    LOAD_PROGRAM_BY_ID,
    LOAD_PROGRAMS,
    LOAD_ALL_PROGRAMS
} from '../actions/actionTypes';

import { updateObj } from '../utility';

const initialState = {
    "published": false,
    "courses": null,//[]
    "programId": "",
    "title": "",
    "programCode": "",
    "span": 4,
    "description": "",
    "errors":null,

    "programs":null,

}

const createProgramReducing = (state,action) =>{
    console.log("createProgramReducing [programReducer]")
    return updateObj(
        state,
        {
            "errors":action.errors 
        }
    )
}
const updateProgramReducing = (state,action) =>{
    return {};
}





const reducer = (state = initialState, action) =>{

    switch(action.type){
        case CREATE_PROGRAM:
            return createProgramReducing(state,action);
        case UPDATE_PROGRAM:
            return updateProgramReducing(state,action)
        default:
            return state;
    }

}

export default reducer;