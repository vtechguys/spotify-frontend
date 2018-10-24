import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/UI/Login/Login'
import Register from './Components/UI/Register/Register'
import ForgotPassword from './Components/UI/ForgotPassword/ForgotPassword'
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
<<<<<<< HEAD
      <h1>App</h1>
=======
      
      <div className="App container">
      <div className='row justify-content-center'>
      <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/forgotPassword' component={ForgotPassword}></Route>
        </Switch>
        </Router>
        </div>
      </div>
>>>>>>> 71f2b6c5c7b35c8338218be1f17b95d94463d33f
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
