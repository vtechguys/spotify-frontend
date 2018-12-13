import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import  Login  from '../../Components/Login/Login';
import Register  from '../../Components/Register/Register';

class Auth extends React.Component{
    
render(){
    return (
        <React.Fragment>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Redirect to="/login"/>
        </Switch>
        </React.Fragment>
    )
}
}

export default Auth;