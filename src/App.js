import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/UI/Login/Login'
import Register from './Components/UI/Register/Register'
import ForgotPassword from './Components/UI/ForgotPassword/ForgotPassword'
import './App.css';

class App extends Component {
  render() {
    return (
      
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
    );
  }
}

export default App;
