// Screen for Program 
//All create,update,delete,load,load-by-id,toggle-program

//React for JSX,Component as Smart Screen
import React,{ Component} from 'react';
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



function looselyMatch(array,string){
	var indexOfMatch = -1;
	array.forEach((elem,index)=>{
			
		if(string.includes(elem)){
				indexOfMatch = index;
		}
	})


	return indexOfMatch
	
	
}

class Program extends Component{

    state = {
      
        allowedURLS : [
            reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM,
            reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID,
            reactUrls.PROGRAM + reactUrls.CREATE_PROGRAM,
            reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM
        ]

    }

    render(){

        let programJSX = null;


        if(looselyMatch(this.state.allowedURLS,this.props.location.pathname)>-1){
            if( this.props.app.isLogedIn ){
                console.log( this.props.auth.role,this.props.location.pathname)
                if( this.props.auth.role === 'superadmin' || this.props.auth.role === 'admin' ){
                    //ALL ALLOWED URLS ARE ACCESIBLE HERE
                    if( this.props.location.pathname === ( reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM ) ){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                                    render={ ()=><h1>Load all programs by default</h1> }
                            />
                        );
                    }
                    else if(this.props.location.pathname.includes( reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID)){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID + '/:pid' } 
                                    render={ ()=><h1>Load  programs by program-id</h1> }
                            />
                        );
                    }
                    else if(this.props.location.pathname === ( reactUrls.PROGRAM + reactUrls.CREATE_PROGRAM )){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.CREATE_PROGRAM } 
                                    render={ ()=><h1>createProgram </h1> }
                            />
                        );
                    }
                    else if(this.props.location.pathname.includes(reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM)){
                        console.log("How about this")
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM + '/:pid' } 
                                    render={ ()=><h1>UPDATE_PROGRAM </h1> }
                            />
                        );
                        console.log(programJSX)
                    }
                    else{
                        //NEVER GOING TO HAPPERN
                        programJSX = (
                            <h1>Never happening</h1>
                        )
                    }
                }
                else{
                    //USER ONLY USER ROUTE
                    if( this.props.location.pathname === (reactUrls.PROGRAM+reactUrls.LOAD_ALL_PROGRAM) ){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                                    render={ ()=><h1>Load all programs by default</h1> }
                            />
                        );
                    }
                    else if( this.props.location.pathname.includes(reactUrls.PROGRAM+reactUrls.LOAD_PROGRAM_BY_ID) ){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM + '/:pid' } 
                                    render={ ()=><h1>Load  programs by program-id</h1> }
                            />
                        );
                    }
                    else{
                        programJSX = (
                            //UNAUTHERISED ACCESS
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM} 
                                    render={ ()=><h1>Load all programs by program</h1> }
                            />
                        );
                    }
                }
            }
        }
        else{
            //WRONG URLS NOT SUPPORTED=>EITHER SHOW PAGE NOT FOUND OR LOAD_ALL_PROGRAMS
            console.log("?????")
            programJSX = (
                <Route 
                        path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                        render={ ()=><h1>Load all programs by default</h1> }
                />
            );
        }



        
        console.log(programJSX);

        return (
            <div>
                below shold be the nested routing
                <Switch>
                    {
                        programJSX
                    }
                    {   
                        /*
                            Not required to redirect thoug.
                            All cared above if anyhow programJSX===null then this will happen 
                        */
                    }
                    {/* <Redirect to={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM } render={()=><h1>Redirected load</h1>}/> */}

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