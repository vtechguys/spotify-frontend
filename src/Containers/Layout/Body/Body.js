//imported Suspense and lazy

import React, { Component,Suspense,lazy} from 'react';

import { Route,Switch } from 'react-router-dom'


import { reactUrls } from '../../../config/registeredUrls';

import Spinner from '../../../Components/UI/Spinner/Spinner';
//React now officially supports lazy loading(or also called code splitting)
//So now no Need To rely on webpacks code Splitting feature
//No more fuzzy Hocs 
//lazy takes in a callback function which returns 
//import results and all this is asynchronous
const Auth=lazy(()=>import('../../Auth/Auth'));

const Program=lazy(()=>import('../../Program/Program'));

class Body extends Component{
    render(){
        let authProps = {
            app:this.props.app,
            auth:this.props.auth

        }
        return(
            <div>
                <h1>Body</h1>
                {/* Suspense is used to specify what 
                you want to display while routing is 
            occuring like earlier we use loadable prop
        to do that now we just have to wrap our 
    Routes with Suspense Component which
takes in a prop called fallback where you specify what to
render while routing is occuring*/}
                <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route 
                        path={reactUrls.AUTH} //'/auth'
                        render={(props)=><Auth {...authProps} {...props}/>}
                        
                    />
                    <Route 
                        path={reactUrls.PROGRAM}
                        render={(props)=><Program {...authProps} {...props}/>}
                    />
                    {/* <Route 
                        path={ reactUrls.TEST } 
                        component={
                            asyncComponent(
                                {
                                    importComponent:()=>import('../../Test/Test'),
                                    props:authProps,
                                    loadingComponent:()=>Spinner,
                                    timeout:10 
                                }
                            )
                        }    
                    /> */}

                </Switch>
                </Suspense>
                {/* <Redirect to={reactUrls.ROOT} /> */}
            </div>
        )
    }
}
export default Body;