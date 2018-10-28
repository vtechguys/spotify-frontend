
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
export const Login =()=>{

   
        return(
            <div className='col-md-6 Login'>
            <h1>Login</h1>
            <Input type='email' id='loginEmail'>Email</Input>
            <Input type='password' id='loginPassword'>Password</Input>
            <div className='float-left' style={{margin:5}}></div>
            <div className='float-right' style={{margin:5}}></div>
            <Button type='submit' className='primary'>Login</Button>
            </div>
        )
    
}

