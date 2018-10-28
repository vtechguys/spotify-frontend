import React from 'react'
import './Input.css'

const Input = (props)=>{


    return(
        <div className="form-group col-md-12" style={{padding:0}}>
    
    <input onChange={props.onChange} onBlur={props.onBlur} type={props.type} className="form-control col-md-12" id={props.id} placeholder={props.children}/>
  </div>
    )
}

export default Input;