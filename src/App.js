import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

//Import actions creators
import {
  webIndexAsync
} from './store/actions/app';



//import storage to retive token
import storage from './utils/localStorage';
class App extends Component {
  

  checkSession = () =>{
    //Will check if previous session exist.
    var token = storage.get("token");
    if(token){
      this.props.webSession(token);
      console.log("Instant called")
    }
    else{
      //No token. need to login...redirect to login page
      console.log("No token.Need to login...redirect to login page")
    }
  }

  componentWillMount(){
    //???should check for online here??
  }
  componentDidMount(){
      this.checkSession();//check session at begining of app.
  }

  render() {
    return (
      <h1>App</h1>
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
    webSession: (token) => dispatch(  webIndexAsync(token) ) 

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
