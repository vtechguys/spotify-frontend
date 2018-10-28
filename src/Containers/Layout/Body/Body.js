import React, { Component } from 'react';

import { Route } from 'react-router-dom'


import { reactUrls } from '../../../config/registeredUrls';

//Routes in body
import Auth from '../../Auth/Auth';


class Body extends Component{
    render(){
        return(
            <div>
                <h1>Body</h1>
                <Route 
                    path={reactUrls.AUTH} //'/auth'

                    component={Auth}
                />
                <Redirect to={reactUrls.ROOT} />
            </div>
        )
    }
}
export default Body;