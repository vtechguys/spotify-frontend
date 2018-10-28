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

        signInForm:false,
        signUpForm:false,
        forgotPasswordForm:false,
        changePasswordForm:true,

        email:'',
        isEmailValid:true,
        validationEmailMsg:'',

        password:'',
        isPasswordValid:true,
        validationPasswordMsg:'',

        confirmPassword:'',
        isCofmPasswordValid:true,
        validationConfmPassMsg:'',

        confmPassValid:true,

        firstName:'',
        isValidFirstName:true,
        validationFirstNameMsg:'',

        lastName:'',
        isValidLastName:true,
        validationLastNameMsg:'',

        dob:'',
        isValidDOB:true,
        validationDOBMsg:''



    }

    componentDidMount(){

        if(this.props.isLogedIn){
            this.setState({
                changePasswordForm:true
            });
        }
        else{
            this.setState({
                signInForm:true,
                signUpForm:true,
                forgotPasswordForm:true,
                changePasswordForm:false

            });
        }
       
    }

    fillEmail = (event)=>{//onchange
        let text = event.target.value;
        if(text && text.trim().length===0){
            return ;
        }
        else{
            this.setState({
                email:text
            });
        }

    }
    checkEmail=()=>{
        let email = this.state.email;
        console.log("checkEmail",email);
        if(!validate.email(email)){

            this.setState({
                isEmailValid:false,
                validationEmailMsg:'Email is Invalid'
            })

        }
    
    }
    



   
    render(){        
        
        return (
            <div className="">
                <h1>Auth</h1>
                <Switch>

                    {

                        this.state.signUpForm   ?

                        <Route 
                            path={ reactUrls.AUTH + reactUrls.SIGN_UP }
                            
                           

                            render={()=><Register  checkEmail={this.checkEmail}
                            fillEmail={this.fillEmail}/>} 
                        />


                        :null


                    }
                    {


                        this.state.signInForm   ?

                        <Route path={ reactUrls.AUTH + reactUrls.SIGN_IN } component={Login}/>

                        :null


                    }
                    {
                        
                        this.state.forgotPasswordForm   ?

                        <Route path={ reactUrls.AUTH + reactUrls.FORGOT_PASSWORD } component={ForgotPassword} />

                        :null

                    }
                    {

                        this.state.changePasswordForm   ?

                        <Route path = { reactUrls.AUTH + reactUrls.CHANGE_PASSWORD_FORM } render={()=><h3>changePasswordForm</h3>}/>

                        :null
                        

                    }

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