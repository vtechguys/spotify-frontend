import React, { Component } from 'react';

import { Route,Switch } from 'react-router-dom'


import { reactUrls } from '../../../config/registeredUrls';

//Routes in body
import asyncComponent from '../../../hoc/asyncComponent';


const AsyncAuthComponent = asyncComponent(()=>{
    
    return import('../../Auth/Auth');//dynamic import
}); 

class Body extends Component{
    render(){
        return(
            <div>
                <h1>Body</h1>
                <Switch>
                    <Route 
                    path={reactUrls.AUTH} //'/auth'
                    component={AsyncAuthComponent}
                />
                </Switch>
                
                {/* <Redirect to={reactUrls.ROOT} /> */}
            </div>
        )
    }
}
export default Body;