import React from 'react';
import config from '../../../config';
import './Avatar.css';
export const Avatar = (props) =>{
    if(!props.avatarImg){
        props.avatarImg = config.DEFAULT_AVATAR
    }
    return (
        <img className="Avatar" src={props.avatarImg} alt={props.avatarName}>
        </img>
    )

}