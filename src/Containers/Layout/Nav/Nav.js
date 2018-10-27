import React, { Component } from 'react';

import { connect } from 'react-redux';



import './Nav.css';


//companyInfo
import config from '../../../config';

//components
import { CompanyInfo } from '../../../Components/CompanyInfo/CompanyInfo';
import { SearchBar } from '../../../Components/SearchBar/SearchBar';
import { UserInfo } from '../../../Components/UserInfo/UserInfo';

//signOutAsync
import { signOutAsync } from '../../../store/actions/auth'
// import {  } from '../../../store/actions/app'

class Nav extends Component{

   
    state = {
        isVisibleDropDown:false,
        searchFor:"",
        searchType:"ALL"
    };

    
    //toggleDropDown
    toggleDropDown = () =>{
        console.log("toggleDropDown ",!this.state.isVisibleDropDown);
        this.setState(prevState=>{
            return {
                isVisibleDropDown:!prevState.isVisibleDropDown

            }
        })
    }
    searching = (event)=>{
        let text = event.target.value;
        if(text && text.trim().length>0){

            this.setState({
                searchFor:text
            })

        }
        else{
            return;
        }
    }
    searchType = (event) =>{
        this.setState({
            searchType:event.target.value
        })
    }
    searchSubmit = () =>{
        
        console.log("Searching ");
        let searchFor = this.state.searchFor;
        let serachType = this.state.searchType;
        if(searchFor && searchFor.trim().length>0){
            this.props.searchIt(serachType,searchFor);
        }
        else{
            return;
        }


    }

    clicked = (action) =>{
        switch(action.type){
            case 'LOGOUT':
                this.props.logout()
                break;
            default:
                break;
        }
    }
    render(){



        return (
            <div className="NavContainer row">
                <div className="col-md-2">
                    <CompanyInfo 
                        name = { config.COMPANY_NAME }
                        logo = { config.COMPANY_LOGO }
                        info = { config.COMPANY_INFO }
                        redirecter = { this.props.redirecter }
                    ></CompanyInfo>
                </div>
                <div className="col-md-8">
                    <SearchBar 
                        searchType = { this.searchType }
                        searching={ this.searching }
                        onSumbit = { this.searchSubmit }
                    ></SearchBar>
                </div>
                <div className="col-md-2">
                    <UserInfo 
                        userImg = { this.props.auth.userImage }
                        avatarName = { this.props.auth.name }
                        isLogedIn = { this.props.app.isLogedIn }
                        isVisibleDropDown = { this.state.isVisibleDropDown }
                        toggleDropDown = { this.toggleDropDown }
                        clicked = { this.clicked }
                    ></UserInfo>
                </div>
               

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth:state.auth,
        app:state.auth
    }
}
const mapStateToDispatch = (dispatch) =>{
    return {
        logout:()=>dispatch( signOutAsync() ),
        //searchIt:( type, data )=>dispatch( search( type, data ) )
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Nav);