import React from 'react';
import config from '../../../config';
import './Avatar.css';
export const Avatar = (props) =>{
    
    return (
        <img className="Avatar" src={props.avatarImg||config.DEFAULT_AVATAR} alt={props.avatarName}>
        </img>
    )

}