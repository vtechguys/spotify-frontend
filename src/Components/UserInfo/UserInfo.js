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
    //console.log("isLogedIn",props.isLogedIn);
    


    let dropDownListJSX = null;
    if(props.isLogedIn){

        if(props.isVisibleDropDown){
            dropDownListJSX=(
                <div className="col-md-12" style={{position: "absolute", marginTop:10,padding : 5,left:'-15%',border :'1px solid black' ,backgroundColor :'white',borderRadius: 5}}>
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