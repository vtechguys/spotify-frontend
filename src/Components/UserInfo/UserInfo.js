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
    console.log("isLogedIn",props.isLogedIn);
    


    let dropDownListJSX = null;
    if(props.isLogedIn){

        if(props.isVisibleDropDown){
            dropDownListJSX=(
                <div className="DropDownListItem">
                    <DropDown dropDownList = {dropDownList} clicked={props.clicked}>
    
                    </DropDown>
                </div>
            )
        }
       


        userInfoJSX = (
            <div     >
                <div onClick={props.toggleDropDown}>
                    <Avatar
                        avatarImg = { props.userImage }
                        avatarName = { props.name }
                       
                    >
                    </Avatar>    
                </div>

                {   
                   dropDownListJSX
                }
              
                  
            </div>
        )
    }

    return userInfoJSX
}