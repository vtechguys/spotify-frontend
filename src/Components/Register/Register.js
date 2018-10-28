 import React,{Component} from 'react'
 import './Register.css'
 import {Link} from 'react-router-dom'
 import Input from '../UI/Input/Input'
 import Button from '../UI/Button/Button'

 export const Register =()=>{

 

        return(
            <div className='col-md-10 Register'>
                <h1>Register</h1>
                <div className='row'>
                <div className='float-left container' style={{margin:5, fontSize:16}}><Link to='/'>Back to Login</Link></div>
                <div className='col-md-6'><Input type='text' id='registerFirstName'>First Name</Input></div>
                <div className='col-md-6'><Input type='text' id='registerLastName'>Last Name</Input></div>
                <div className='col-md-12'><Input type='email' id='registerEmail'>Email</Input></div>
                <div className='col-md-6'><Input type='text' id='registerUserName'>User Name</Input></div>
                <div className='col-md-6'><Input type='text' id='registerDOB'>D.O.B.</Input></div>
                <div className='col-md-6'><Input type='password' id='registerPassword'>Password</Input></div>
                <div className='col-md-6'><Input type='password' id='registerConfirmPassword'>Confirm Password</Input></div>
                <Button type='submit' className='primary'>Register</Button>
                </div>
            </div>

        )
  

 }
