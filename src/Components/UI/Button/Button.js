import React from 'react';
import './Button.css';
const Button=(props)=>{
 console.log(props.isValid);   
return (<button type={props.btnType} onClick={props.clicked} className="Button" disabled={props.isValid}>
{props.children}</button>
)}

export default Button;