import React,{Component} from 'react'
import './ForgotPassword.css'
import {Link} from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'

class ForgotPassword extends Component{

    render(){
        return(
            <div className='ForgotPassword'>
            
            <h1>Forgot Password ?</h1>
            <div className='row'>
            <div className='container float-left' style={{margin:5}}><Link to='/'>Back to Login</Link></div>
            <Input type='email' id='forgotPassword' >Email</Input>
            <Button type='submit' className='primary'>Submit</Button>
            </div>
            </div>
        )
            
        
    }
}

export default ForgotPassword