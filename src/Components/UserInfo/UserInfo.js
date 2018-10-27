import React from 'react';

//import Avatar 
import { Avatar } from '../UI/Avatar/Avatar';
//import DropDown
import { DropDown } from '../UI/DropDown/DropDown';


export const UserInfo = (props) =>{


    let dropDownList = [
        {
            type:'PROFILE',
            name:'Profile'
        },
        {
            type:'LOGOUT',
            name:'Logout'
        }
    ]
    let userInfoJSX = (
        <div>
            <h4>SignIn</h4>&nbsp;<h4>SignOut</h4>
        </div>
    ); 
    if(props.isLogedIn){
        userInfoJSX = (
            <div     >
                <div clicked={props.toggleDropDown}>
                    <Avatar
                        avatarImg = { props.userImage }
                        avatarName = { props.name }
                       
                    >
                    </Avatar>    
                </div> 
                {   
                    props.isVisibleDropDown ?
                    <div className="DropDownListItem">
                        <DropDown dropDownList = {dropDownList}>

                        </DropDown>
                    </div>
                    :null
                }
              
                  
            </div>
        )
    }

    return userInfoJSX
}