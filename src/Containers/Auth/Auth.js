import React, { Component } from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

//Urls
import { reactUrls } from '../../config/registeredUrls';
//Route components
import { Register } from '../../Components/Register/Register';
import { ForgotPassword } from '../../Components/ForgotPassword/ForgotPassword';
import { Login } from '../../Components/Login/Login';

//validate
import validate from '../../utils/validate';

class Auth extends Component {


    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Email'
                },
                value: '',
                validationFailMessage: '',
                valid: false,
                touched: false,
                validations: {
                    required: true,
                    type: 'email'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: '',
                validationFailMessage: '',
                valid: false,
                touched: false,
                validations: {
                    required: true
                }
            }
        },
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Email'
                },
                value: '',
                validationFailMessage: '',
                valid: false,
                touched: false,
                validations: {
                    required: true,
                    type: 'email'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: '',
                validationFailMessage: '',
                valid: false,
                touched: false,
                validations: {
                    required: true,
                    minLength: 4
                }
            },
            confirm_Password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validationFailMessage: '',
                valid: false,
                touched: false,
                validations: {
                    mustMatchPassword: true
                }
            },
            gender: {
                elementType: 'dropdown',
                elementConfig: {
                    options: [{ value: 'male', displayValue: 'Male' }, { value: 'female', displayValue: 'Female' }]
                },
                value: 'male',
                valid: true,
                validationFailMessage: '',
                validations: {}
            }

        },
       
    }

    changeHandler = (event, element, form) => {
        const updatingForm = { ...this.state[form] };
        const updatingFormElement = { ...updatingForm[element] };
        updatingFormElement.value = event.target.value;
        let validateObject = validate.checkValidity(updatingFormElement.value, updatingFormElement.validations, updatingForm['password'].value)
        updatingFormElement.valid = validateObject.isValid;
        updatingFormElement.message = validateObject.message;
        updatingFormElement.touched = true;
        updatingForm[element] = updatingFormElement;
        let stateName = form === 'loginForm' ? 'isLoginFormValid' : 'isSignInFormValid';
        let isOverAllFormValid = true;
        for (let key in updatingForm) {
            isOverAllFormValid = updatingForm[key].valid && isOverAllFormValid;
        }
        this.setState({ [form]: updatingForm, [stateName]: isOverAllFormValid })
    }
    formSubmitHandler = (event, form) => {
        event.preventDefault();
        if (!this.state.isLoginFormValid || !this.state.isSignInFormValid) {
            const updatingForm = { ...this.state[form] };
            for (let element in updatingForm) {
                const updatingFormElement = { ...updatingForm[element] };
                let validateObject = validate.checkValidity(updatingFormElement.value, updatingFormElement.validations, updatingForm['password'].value)
                updatingFormElement.valid = validateObject.isValid;
                updatingFormElement.message = validateObject.message;
                //console.log(updatingFormElement);
                updatingFormElement.touched = true;
                updatingForm[element] = updatingFormElement;
            }
            this.setState({ [form]: updatingForm })
            return;
        }
        const formToBeSubmitted = { ...this.state[form] };
        const deClutteredForm = {};

        for (let key in formToBeSubmitted) {
            if (key === 'confirmPassword') {
                continue;
            }
            deClutteredForm[key] = formToBeSubmitted[key].value;
        }
        //console.log("this object will be pushed to databse");
        //console.log(deClutteredForm);
        //this is the object that will be pushed to database
    }
    render() {
        console.log('AUTH PROPS',this.props)
        //console.log(this.props);
        let authJSX = null;
        if(this.props.app.isLogedIn){//logedIn==true
            if(this.props.location.pathname===(reactUrls.AUTH + reactUrls.CHANGE_PASSWORD_FORM)){
                authJSX = (
                    <Route 
                    path={reactUrls.AUTH + reactUrls.CHANGE_PASSWORD_FORM}
                    render = {
                        ()=><ForgotPassword/>
                    }
            />
                    
                )
            }
            else{
                authJSX=(
                    <h1>No page found</h1>
                )
            }
        }
        else{//not logedin
            if(this.props.location.pathname===(reactUrls.AUTH + reactUrls.SIGN_IN)){
                authJSX = (
                    <Route 
                            path={reactUrls.AUTH + reactUrls.SIGN_IN}
                            render = {
                                ()=><Login loginForm={this.state.loginForm} changed={this.changeHandler} submit={this.formSubmitHandler}/>
                            }
                    />
                )
            }
            else if(this.props.location.pathname===(reactUrls.AUTH + reactUrls.SIGN_UP)){
                authJSX = (
                    <Route 
                            path={reactUrls.AUTH + reactUrls.SIGN_UP}
                            render = {()=>  <Register signInForm={this.state.signInForm} changed={this.changeHandler} submit={this.formSubmitHandler}
                            disabled={this.state.isSignInFormValid} />}
                        />
                )
            }
            else if(this.props.location.pathname===(reactUrls.AUTH + reactUrls.FORGOT_PASSWORD)){
                authJSX = (
                    <h1>Forgot password</h1>
                )
            }
            else{
                authJSX = (
                    <h1>page not found</h1>
                )
            }
        }


        return (
            <div className="">
                <h1>Auth</h1>
                <Switch>

                    {


                        authJSX


                    }
                    <Redirect from={reactUrls.AUTH + '/*'} to={reactUrls.ROOT}/>

                
                </Switch>  

            </div>
        );
    }
}


export default Auth;