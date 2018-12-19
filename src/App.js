import React, { Component } from 'react';
import 'nprogress/nprogress.css';
import nprogress from 'nprogress';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './forms.css';
// import Login from './Components/UI/Login/Login'
// import Register from './Components/UI/Register/Register'
// import ForgotPassword from './Components/UI/ForgotPassword/ForgotPassword'
import './App.css';

import { connect } from 'react-redux';
//Import actions creators
import {
  webIndexAsync,webIndexSync
} from './store/actions/app';

//import Layout
import Layout from './Containers/Layout/Layout';

//import storage to retive token
import storage from './utils/localStorage';

//Router
import { BrowserRouter } from 'react-router-dom';

import config from './config';
import Auth from './Containers/Auth/Auth';

class App extends Component {
  

  checkSession = () =>{
    //Will check if previous session exist.
    var token = storage.get("token");
    if(token){
      this.props.webSessionAsync(token);
    }
    else{
      this.props.webSessionSync("","No token found login again",false,false);
      //No token. need to login...redirect to login page
      //console.log("No token.Need to login...redirect to login page")
    }
  }

  componentWillMount(){
    nprogress.start();
    //???should check for online here??
  }
  componentDidMount(){
    nprogress.done();
      this.checkSession();//check session at begining of app.
  }

  render() {
    return (
      <BrowserRouter>

            <Layout 
            appName={config.APP_NAME}
            appLogo = {config.APP_LOGO} 
            companyInfo={config.COMPANY_INFO} 
            companyLogo={config.COMPANY_LOGO} 
            companyName={config.COMPANY_NAME}
            ></Layout>
          
           
      </BrowserRouter>
  );
  }
}

const mapStateToProps = (state) =>{
  return {
    isLogedIn:state.app.isLogedIn

  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    webSessionAsync: (token) => dispatch(  webIndexAsync(token) ),
    webSessionSync: (token,message,isLogedIn,loadngState)=>dispatch( webIndexSync(token,message,isLogedIn,loadngState) )

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
