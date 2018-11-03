import React from 'react'
import './ForgotPassword.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

export const ForgotPassword =()=>{


        return(
            <div className='ForgotPassword'>
            
            <h1>Forgot Password ?</h1>
            <div className='row'>
            <div className='container float-left' style={{margin:5}}></div>
            <Input type='email' id='forgotPassword' >Email</Input>
            <Button type='submit' className='primary'>Submit</Button>
            </div>
            </div>
        )
            
        
   
}

  