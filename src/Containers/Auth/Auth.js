import React,{ Component } from 'react';

import { Route,Switch,Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

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
        loginForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter Email'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    required:true,
                    type:'email'
                }
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Enter your password'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    required:true
                }
            }
        },
        signInForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter Email'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    required:true,
                    type:'email'
                }
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Enter your password'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    required:true,
                    minLength:4
                }
            },
            confirm_Password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Confirm Password'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    mustMatchPassword:true
                }
            },
            gender:{
              elementType:'dropdown',
              elementConfig:{
                  options:[{value:'male',displayValue:'Male'},{value:'female',displayValue:'Female'}]
              },
              value:'male',
              valid:true,
              validationFailMessage:'',
              validations:{}
            }

        },
        isLoginFormValid:false,
        isSignInFormValid:false
    }
    
    changeHandler=(event,element,form)=>{
      const updatingForm={...this.state[form]};
      const updatingFormElement={...updatingForm[element]};
      updatingFormElement.value=event.target.value;
      let validateObject=validate.checkValidity(updatingFormElement.value,updatingFormElement.validations,updatingForm['password'].value)
      updatingFormElement.valid=validateObject.isValid;
      updatingFormElement.message=validateObject.message;
      updatingFormElement.touched=true;
      updatingForm[element]=updatingFormElement;
      let stateName=form==='loginForm'?'isLoginFormValid':'isSignInFormValid';
      let isOverAllFormValid=true;
      for(let key in updatingForm)
      {
        isOverAllFormValid=updatingForm[key].valid && isOverAllFormValid;
      }
      this.setState({[form]:updatingForm,[stateName]:isOverAllFormValid})
    }
    formSubmitHandler=(event,form)=>{
        event.preventDefault();
        if(!this.state.isLoginFormValid || !this.state.isSignInFormValid)
       {const updatingForm={...this.state[form]};
       for(let element in updatingForm)
    {const updatingFormElement={...updatingForm[element]};
let validateObject=validate.checkValidity(updatingFormElement.value,updatingFormElement.validations,updatingForm['password'].value)
       updatingFormElement.valid=validateObject.isValid;
       updatingFormElement.message=validateObject.message;
       console.log(updatingFormElement);
       updatingFormElement.touched=true;
       updatingForm[element]=updatingFormElement;
    }
    this.setState({[form]:updatingForm})
    return;
       }
        const formToBeSubmitted={...this.state[form]};
       const deClutteredForm={};
      
       for(let key in formToBeSubmitted)
       {    if(key==='confirmPassword')
       {
           continue;
       }
           deClutteredForm[key]=formToBeSubmitted[key].value;
       }
       console.log("this object will be pushed to databse");
       console.log(deClutteredForm);
       //this is the object that will be pushed to database
    }
        



    

    



   
    render(){        
        console.log(reactUrls.AUTH + reactUrls.SIGN_UP );
        return (
            <div className="">
                <h1>Auth</h1>
                <Switch>

    <Route path={ reactUrls.AUTH + reactUrls.SIGN_UP }
    key={this.props.location.pathname}
render={()=><Register signInForm={this.state.signInForm} changed={this.changeHandler} submit={this.formSubmitHandler}
disabled={this.state.isSignInFormValid}/>}/>
<Route path={reactUrls.AUTH+reactUrls.SIGN_IN}
key={this.props.location.pathname}
render={()=><Login loginForm={this.state.loginForm} changed={this.changeHandler} submit={this.formSubmitHandler}
disabled={this.state.isLoginFormValid}/>}/>
</Switch>
         
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isLogedIn:state.app.isLogedIn
    }
}
export default connect(mapStateToProps,null)(Auth);