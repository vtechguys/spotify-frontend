// Screen for Program 
//All create,update,delete,load,load-by-id,toggle-program

//React for JSX,Component as Smart Screen
import React,{ Component,lazy,Suspense} from 'react';
//Fetch important info from state.
import { connect } from 'react-redux';
//Rotring requireds
import {  Switch,Route,Redirect } from "react-router-dom";
//Urls
import { reactUrls } from '../../config/registeredUrls';
//validate
import validate from '../../utils/validate';

import Spinner  from '../../Components/UI/Spinner/Spinner'
import { createProgramAsync,loadProgramAsync } from '../../store/actions';
 
import config from '../../config';

function looselyMatch(array,string){
	var indexOfMatch = -1;
	array.forEach((elem,index)=>{
			
		if(string.includes(elem)){
				indexOfMatch = index;
		}
	})


	return indexOfMatch
	
	
}

const LoadPrograms=lazy(()=>import('./LoadAllPrograms/LoadPrograms'));
const CreateProgram=lazy(()=>import('./CreateProgram/CreateProgram'));
class Program extends Component{

    state = {
        //Allowed Urls by Program component
        allowedURLS : [
            reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM,
            reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID,
            reactUrls.PROGRAM + reactUrls.CREATE_PROGRAM,
            reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM
        ],
        //update and create program
        program:{
            published:false,
            courses:[],
            programId:"",
            title:"",
            programCode:"",
            span:0,//yrs
            description:"",
            createdAt:"",
        },
        

       loadPrograms:[],//List of program obj
        selectedProgram:null//should be used for update and loadById

    }


    clearProgram=()=>{
        this.setState({
            program:{
                published:false,
                courses:[],
                programId:"",
                title:"",
                programCode:"",
                span:0,//yrs
                description:"",
                createdAt:"",
            }
        });
    }

    fetchAllPrograms=(count=config.DEFAULT_PROGRAM_LOAD_COUNT,limit=config.DEFAULT_PROGRAM_LOAD_LIMIT)=>{
        //count and limit for pagination
        const countLimit = {
            count:count,
            limit:limit
        };
        console.log("THis called load programs")
        if(count>=0 && limit>0){
            
           this.props.loadProgram(countLimit);

        }
        else{
            //cannot migrate to irrelavant page//pagination
        }




    }
    createProgram=(program)=>{
        //seting state of program
        this.setState({
           program:{
                published:program.published,
                courses: program.courses,
                programId: program.programId,
                title: program.title,
                programCode: program.programCode,
                span: program.span,//yrs
                description: program.description,
                createdAt:Date(program.createdAt),
           }
        });
        //setting api call
        this.props.createProgram( program );
    }
    render(){
       let programJSX = null;
        const createProgramProps = {
            program:this.state.program,
            create:this.createProgram
        }
       const loadAllProgramProps = {
        loadListItems: this.fetchAllPrograms,
        programs:this.props.programs
        }
      if(looselyMatch(this.state.allowedURLS,this.props.location.pathname)>-1){
            if( this.props.app.isLogedIn ){
                console.log( this.props.auth.role,this.props.location.pathname)
                if( this.props.auth.role === 'superadmin' || this.props.auth.role === 'admin' ){
                    //ALL ALLOWED URLS ARE ACCESIBLE HERE
                    if( this.props.location.pathname === ( reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM ) ){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                                    render={(props)=><LoadPrograms {...loadAllProgramProps} {...props} />}
                            />
                        );
                    }
                    else if(this.props.location.pathname.includes( reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID )){
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
                                    excat
                                    path={ reactUrls.PROGRAM + reactUrls.CREATE_PROGRAM }
                                    render={(props)=><CreateProgram {...createProgramProps} {...props}/>}
                                    // render={ ()=><CreateProgram clear={ this.clearProgram } program={ this.state.program } /> }
                            />
                        );
                    }
                    else if(this.props.location.pathname.includes(reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM)){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.UPDATE_PROGRAM + '/:pid' } 
                                    render={ ()=><h1>UPDATE_PROGRAM </h1> }
                            />
                        );
                    }
                    else{
                        //NEVER GOING TO HAPPERN
                        programJSX = (
                            <Route 
                                path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                                render={(props)=><LoadPrograms {...loadAllProgramProps} {...props} programs={this.props.programs}/>}
                                />
                        )
                    }
                }
                else{
                    //USER ONLY USER ROUTE
                    if( this.props.location.pathname === (reactUrls.PROGRAM+reactUrls.LOAD_ALL_PROGRAM) ){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                                    render={(props)=><LoadPrograms {...loadAllProgramProps} {...props} programs={this.state.programs}/>}
                            />
                        );
                    }
                    else if( this.props.location.pathname.includes(reactUrls.PROGRAM+reactUrls.LOAD_PROGRAM_BY_ID) ){
                        programJSX = (
                            <Route 
                                    path={ reactUrls.PROGRAM + reactUrls.LOAD_PROGRAM_BY_ID + '/:pid' } 
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
            else{
                //Not logged in
                programJSX = (
                    <Route 
                            path={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM  } 
                            render={(props)=><LoadPrograms {...loadAllProgramProps} {...props} programs={this.props.programs}/>}
                            />
                );
            }
        }
        else{
            //WRONG URLS NOT SUPPORTED=>EITHER SHOW PAGE NOT FOUND OR LOAD_ALL_PROGRAMS
            console.log("?????")
            programJSX = (
                <Route 
                        path={ reactUrls.PAGE_NOT_FOUND  } 
                        render={()=><h1>PAGE_NOT_FOUND</h1> }
                        />
            );
        }
       return (
            <div>
                below should be the nested routing
                <Suspense fallback={<Spinner/>}>
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
                    <Redirect to={ reactUrls.PROGRAM + reactUrls.LOAD_ALL_PROGRAM } render={()=><h1>Redirected load-programs</h1>}/>

                </Switch>
                </Suspense>
            </div>
        );
    }

}


//Body is connected to store and always pass app and auth sslice of store
const mapStateToProps = (store) =>{
    return {
        programs:store.programs,
        program:store.program,
        selectedProgram:store.selectedProgram
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        // loadProgramAsync:()=>dispatch( loadAllPrograms ),
        //toggleProgram:dispatch( ),
        createProgram:( program )=>dispatch( createProgramAsync(program) ),
        loadProgram:( countLimit ) => dispatch( loadProgramAsync(countLimit) ),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Program);