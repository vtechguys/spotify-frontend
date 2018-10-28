import React,{ Component } from 'react';

import { Route,Switch,Redirect } from 'react-router-dom';

// import { Login } from '../../Components/Login/Login';
// import { ForgotPassword } from '../../Components/ForgotPassword/ForgotPassword';

//Urls
import { reactUrls } from '../../config/registeredUrls';
//Route components
import { Register } from '../../Components/Register/Register';
import { ForgotPassword } from '../../Components/ForgotPassword/ForgotPassword';
import { Login } from '../../Components/Login/Login';


class Auth extends Component {


    state = {

        signInForm:false,
        signUpForm:false,
        forgotPasswordForm:false,


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
                forgotPasswordForm:true
            })
        }
        else{
            this.setState({
                signInForm:true,
                signUpForm:true,
                forgotPasswordForm:true
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

                        <Route path={ reactUrls.AUTH + reactUrls.SIGN_UP } component={Register} />


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

                </Switch>
         
            </div>
        );
    }
}
export default Auth;