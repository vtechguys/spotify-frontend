import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import { Login } from '../../Components/Login/Login';
import { Register } from '../../Components/Register/Register';

import { reactUrls } from '../../config/registeredUrls'
import { looselyMatch } from '../../utils';
export default class Auth extends React.Component{

    // Allowed Auth URLS
    allowedURLS = [
        reactUrls.AUTH + reactUrls.SIGN_IN,
        reactUrls.AUTH + reactUrls.SIGN_UP,
        reactUrls.AUTH + reactUrls.FORGOT_PASSWORD,
        reactUrls.AUTH + reactUrls.CHANGE_PASSWORD_FORM,
        reactUrls.AUTH + reactUrls.CHANGE_USERNAME_FORM

    ];


render(){
    let authJSX = null;
    console.log(this.props);
    // if(looselyMatch(this.allowedURLS, this.props.location.pathname)>-1){
    //     if(this.props.isLogedIn===true){
    //         if(this.props.location.pathname === ( reactUrls.AUTH + reactUrls.CHANGE_PASSWORD_FORM)){
    //             authJSX = (
    //                 <Route path={ reactUrls.AUTH + reactUrls.CHANGE_PASSWORD_FORM } 
    //                 // component={Register}a
    //                 render={()=><h1>CHANGE_PASSWORD_FORM</h1>}
    //                 />
    //             );
    //         }
    //         else if(this.props.location.pathname === ( reactUrls.AUTH + reactUrls.CHANGE_USERNAME_FORM)){
    //             authJSX = (
    //                 <Route path={ reactUrls.AUTH + reactUrls.CHANGE_USERNAME_FORM } 
    //                 // component={Register}a
    //                 render={()=><h1>CHANGE_USERNAME_FORM</h1>}
    //                 />
    //             );
    //         }
    //         else{
    //             //absurd url 404
    //             authJSX = authJSX = (
    //                 <Route path={ reactUrls.PAGE_NOT_FOUND } 
    //                 // component={Register}a
    //                 render={()=><h1>PAGE_NOT_FOUND</h1>}
    //                 />
    //             );;
    //         }
    //     }
    //     else{
    //         //forgot-password,login,register
    //         if(this.props.location.pathname === ( reactUrls.AUTH + reactUrls.SIGN_IN) ){
    //             authJSX = (

    //                 <Route path={ reactUrls.AUTH + reactUrls.SIGN_IN } component={Login}/>

    //             );
    //         }
    //         else if(this.props.location.pathname === ( reactUrls.AUTH + reactUrls.SIGN_UP)){
    //             authJSX = (

    //                 <Route path={ reactUrls.AUTH + reactUrls.SIGN_UP } component={Register}/>

    //             );
    //         }
    //         else if(this.props.location.pathname.includes( reactUrls.AUTH + reactUrls.FORGOT_PASSWORD)){
    //             authJSX = (
    //                 <Route path={ reactUrls.AUTH + reactUrls.FORGOT_PASSWORD + '/:token' } 
    //                 // component={Register}a
    //                 render={()=><h1>FORGOT_PASSWORD</h1>}
    //                 />

    //             );
    //         }
    //         else{
    //             authJSX = (
    //                 <Route path={ reactUrls.PAGE_NOT_FOUND } 
    //                 // component={Register}a
    //                 render={()=><h1>PAGE_NOT_FOUND</h1>}
    //                 />
    //             );
    //         }

    //     }
    // }
    // else{
    //    authJSX  = (
    //         <Route path={ reactUrls.PAGE_NOT_FOUND } 
    //         // component={Register}a
    //         render={()=><h1>PAGE_NOT_FOUND</h1>}
    //         />
    //     );
    // }
    return (
        <React.Fragment>
        <Switch>
            {
                authJSX
            }
        </Switch>
        </React.Fragment>
    )
}
}