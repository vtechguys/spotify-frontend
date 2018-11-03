
import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import './Login.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
export const Login =(props)=>{
    let formElements=[];
    for(let key in props.loginForm)
    {
        formElements.push({id:key,config:props.loginForm[key]})
    }
   
        return(
            <div className='col-md-6 Login'>
            <h1>Login</h1>
            <form className="form"  onSubmit={(event)=>props.submit(event,"loginForm")}>
            {formElements.map((formElement)=>{
                return <Input label={formElement.id} key={formElement.id} elementType={formElement.config.elementType} 
                value={formElement.value}
                elementConfig={formElement.config.elementConfig}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                message={formElement.config.message}
                changed={(event)=>props.changed(event,formElement.id,'loginForm')}/>
            })
         }
         <Button type='submit' className='primary'>Login</Button>
         </form>
        
            </div>
        )
    
}

