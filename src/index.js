import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//configuringRedux
import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//Async redux thunk
import thunk from 'redux-thunk';

//Connectiong redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Logger middleware
const logger = (store) =>{
    return (next) =>{
        return (action) => {
            //console.log("[Middleware] Action Dispatched ",action);
            const result = next(action);
            //console.log( "State after Action Dispatch " + action.type + " state is ",store.getState() );
            return result;
        }
    }
  
}




//Passing redux as middleware
const store = configureStore(composeEnhancers(applyMiddleware(logger, thunk)));



ReactDOM.render(

<Provider store={store}>
    <App appName="Questioner"/>
</Provider>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
