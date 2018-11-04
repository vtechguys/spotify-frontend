// Screen for Program 
//All create,update,delete,load,load-by-id,toggle-program

//React for JSX,Component as Smart Screen
import React,{ Component } from 'react';
//Fetch important info from state.
import { connect } from 'react-redux';
//Rotring requireds
import {  Switch,Route,Redirect } from "react-router-dom";
//Urls
import { reactUrls } from '../../config/registeredUrls';
//validate
import validate from '../../utils/validate';



//import nested screens
import CreateProgram from './CreateProgram/CreateProgram';
import LoadAllPrograms from './LoadAllPrograms/LoadPrograms'


class Program extends Component{

    state = {

    }

    render(){

        let programJSX = (<h1>Program</h1>);

        if(this.props){

        }



        return (
            <div>
                <Switch>
                    <Route
                        path={ reactUrls.PROGRAM + reactUrls.CREATE_PROGRAM }
                        component={ CreateProgram }
                    />
                    {/* <Route
                        path={ reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM }
                        component={}
                    /> */}
                   
                    <Route 
                        path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM } 
                        component={ LoadAllPrograms }
                    />
                    {/* <Route 
                        path={ reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID } 
                        component={}
                    /> */}
                    <Redirect 
                        from={ reactUrls.PROGRAM + '/*'} 
                        to={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM } 
                        component={ LoadAllPrograms }
                    />

                    {/* <Redirect to={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM } component={LoadAllPrograms}/> */}

                </Switch>

            </div>
        );
    }

}


//Body is connected to store and always pass app and auth sslice of store
const mapStateToProps = (state) =>{
    return {
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        loadProgram:()=>dispatch(  ),
        toggleProgram:dispatch( ),
        createProgram:dispatch(  )
    }
}
export default connect()(Program);