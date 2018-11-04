//APIS
export const apiUrls = {
    //First call to webindex
    WEB_INDEX:'webindex',
    //Auth urls
    SIGN_IN:'/users/login',
    SIGN_UP:'/users/register',
    FORGOT_PASSWORD:'users/forgot-password',
    RESET_PASSWORD:'users/reset-password',
    SIGN_OUT:'logout',
    //PROGRAMS
    CREATE_PROGRAM:'/programs/create-program',
    UPDATE_PROGRAM:'/programs/update-program',
    DELETE_PROGRAM:'/programs/delete-program',
    LOAD_PROGRAMS:'/programs/load-programs',//programIds:[]
    LOAD_PROGRAM_BY_ID:'/programs/load-program-by-id',//programId:"ancd234"
    LOAD_ALL_PROGRAM:'/programs/load'


}

//REACT URLS
export const reactUrls = {

    ROOT:'/',


    AUTH:'/auth',
    SIGN_IN:'/login',
    SIGN_UP:'/register',
    FORGOT_PASSWORD:'/forgot-password',
    CHANGE_PASSWORD_FORM:'/change-password',

    PROGRAM:'/programs',
    CREATE_PROGRAM:'/create',// /:id
    UPDATE_PROGRAM:'/update',// /:id
    DELETE_PROGRAM:'/delete',// /:id
    LOAD_PROGRAM:'/load',// loads all program
    LOAD_PROGRAM_BY_ID:'/program',//programs/program/:id
    LOAD_ALL_PROGRAM:'/load'




}
