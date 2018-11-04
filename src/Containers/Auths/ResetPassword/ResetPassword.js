import React from 'react'
import './ResetPassword.css'
import Input from '../../../Components/UI/Input/Input'
import Button from '../../../Components/UI/Button/Button'

export const ResetPassword = (props)=>{
    console.log(props)
    let formElements=[]
    for(let key in props.resetPassword){
        console.log(key)
        formElements.push({id : key, config : props.resetPassword[key]})
    }
    console.log(formElements)
    return(
        <form className='container float-left' style={{margin:5}} 
            onSubmit={(event)=>props.submit(event,'resetPassword')}>
            {formElements.map((formElement)=>{
                return <Input label={formElement.id} key={formElement.id} elementType={formElement.config.elementType}
                value={formElement.value} elementConfig={formElement.config.elementConfig}
                invalid={formElement.config.invalid}
                touched={formElement.config.touched} message={formElement.config.message}
                changed={(event)=>props.changed(event,formElement.id,'resetPassword')} />
            })}
            <Button type='submit' className='primary'>Submit</Button>
            </form>
    )
}
