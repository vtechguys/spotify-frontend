import React, { Component } from 'react';

import { connect } from 'react-redux';



import './Nav.css';




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
  
    searchSubmit = (type,searchText) =>{
        console.log(type,searchText);
       
        

    }

    clicked = (action) =>{
        console.log("UserActions",action)
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
                        name = { this.props.companyName }
                        logo = { this.props.companyLogo }
                        info = { this.props.companyInfo }
                    ></CompanyInfo>
                </div>
                <div className="col-md-8">
                    <SearchBar 
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


const mapDispatchToProps = (dispatch) =>{
    return {
        logout:()=>dispatch( signOutAsync() ),
        //searchIt:( type, data )=>dispatch( search( type, data ) )
    }
}
export default connect(null, mapDispatchToProps)(Nav);
