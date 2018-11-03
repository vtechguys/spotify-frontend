 import React,{Component} from 'react'
 import './Register.css'
 import {Link} from 'react-router-dom'
 import Input from '../UI/Input/Input'
 import Button from '../UI/Button/Button'

 export const Register =(props)=>{

 
    console.log("Ptops to children is",props);
    let formElements=[];
    for(let key in props.signInForm){
        formElements.push({id:key,config:props.signInForm[key]})
    }    
    return(
            <div className='col-md-10 Register'>
            <form className="form" onSubmit={(event)=>props.submit(event,'signInForm')}>
            {formElements.map((formElement)=>{
                return <Input key={formElement.id} elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                changed={(event)=>props.changed(event,formElement.id,'signInForm')}
                touched={formElement.config.touched}
                invalid={!formElement.config.valid}
                message={formElement.config.message}
                label={formElement.id}/>
            })}
                <Button type='submit' className='primary'>Register</Button>
                </form>
                </div>
            

        )
  

 }
