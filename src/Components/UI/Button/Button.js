import React from 'react';
import './Button.css';
const Button=(props)=>{
   
return (<button type={props.btnType} onClick={props.clicked} className="Button" disabled={props.isValid}>
{props.children}</button>
)}

export default Button;