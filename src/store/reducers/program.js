
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
    "program":{
        "published": false,
        "courses": null,//[]
        "programId": "",
        "title": "",
        "programCode": "",
        "span": 4,
        "description": "",
        "createdAt":null,
    },
    "selectedProgram":null,
    "programs":null,

}

const createProgramReducing = (state,action) =>{
    //console.log("createProgramReducing [programReducer]")
    return updateObj(
        state,
        {
            "program":action.program
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