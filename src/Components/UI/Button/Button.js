import React from 'react';
import './Button.css';
const Button=(props)=>{
    
return (<button onClick={props.clicked} type={props.type} className={[["btn",props.className].join('-'),"btn","btn-block"].join(" ")}>
{props.children}</button>
)}
export default Button;