import React, { Component } from 'react';

import { Route,Switch } from 'react-router-dom'

import Loadable from 'react-loadable';

import { reactUrls } from '../../../config/registeredUrls';

import Program from '../../Program/Program';

import Spinner from '../../../Components/UI/Spinner/Spinner';

//Routes in body
import asyncComponent from '../../../hoc/asyncComponent';

/**
 * ()=>{
    
    return import('../../Auth/Auth');//dynamic import
}
 */
// const AsyncComponent =(componentToLoad,props)=> asyncComponent({
//     componentToLoad:()=>import(componentToLoad),
//     props:props
// }); 
// const AsyncAuthComponent = Loadable({
//     loader:()=>import('../../Auth/Auth'),
//     loading:()=><h3>loading</h3>
// })




class Body extends Component{
    render(){
        let authProps = {
            app:this.props.app,
            auth:this.props.auth

        }
        return(
            <div>
                <h1>Body</h1>
                <Switch>
                    <Route 
                        path={reactUrls.AUTH} //'/auth'
                        component={
                            asyncComponent(
                                {
                                    importComponent:()=>import('../../Auth/Auth'),
                                    props:authProps,
                                    loadingComponent:()=>Spinner,
                                    timeout:10
                                }
                            )
                        }
                        app = { this.props.app }
                        auth = { this.props.auth }
                    />
                    <Route 
                        path={reactUrls.PROGRAM}
                        component={Program}
                    />
                </Switch>
                
                {/* <Redirect to={reactUrls.ROOT} /> */}
            </div>
        )
    }
}
export default Body;