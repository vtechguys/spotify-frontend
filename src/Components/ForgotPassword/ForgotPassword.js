import React from 'react'
import './ForgotPassword.css'
import Input from '../../../Components/UI/Input/Input'
import Button from '../../../Components/UI/Button/Button'

export const ForgotPassword =(props)=>{
        
        let formElements=[]
        for(let key in props.forgotPassword){
            formElements.push({id : key, config : props.forgotPassword[key]})
        }
        return(
            <div className='ForgotPassword'>
            
            <h1>Forgot Password ?</h1>
            <div className='row'>
            <form className='container float-left' style={{margin:5}} 
            onSubmit={(event)=>props.submit(event,'forgotPassword')}>
            {formElements.map((formElement)=>{
                return <Input label={formElement.id} key={formElement.id} elementType={formElement.config.elementType}
                value={formElement.value} elementConfig={formElement.config.elementConfig}
                invalid={formElement.config.invalid}
                touched={formElement.config.touched} message={formElement.config.message}
                changed={(event)=>props.changed(event,formElement.id,'forgotPassword')} />
            })}
            <Button type='submit' className='primary'>Submit</Button>
            </form>
            </div>
            </div>
        )
            
        
   
}

  