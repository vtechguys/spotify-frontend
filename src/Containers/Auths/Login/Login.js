
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
class Login extends Component{

    render(){
        return(
            <div className='col-md-6 Login'>
            <h1>Login</h1>
            <Input type='email' id='loginEmail'>Email</Input>
            <Input type='password' id='loginPassword'>Password</Input>
            <div className='float-left' style={{margin:5}}><Link to='/forgotPassword'>Forgot Password?</Link></div>
            <div className='float-right' style={{margin:5}}><Link to='/register'>New User?</Link></div>
            <Button type='submit' className='primary'>Login</Button>
            </div>
        )
    }
}

export default Login