import React , { Component,Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux';



//import Aux 
// import Aux from '../../hoc/Aux';



/////Base components/////

//Nav
import Nav from './Nav/Nav';
//Body
import Body from './Body/Body';
//Footer
import Footer from './Footer/Footer';

///Layout
class Layout extends Component{

    render (){

        return (
            <Fragment>
              <Router>  
                <Nav 
                    appName = { this.props.appName }
                    user = { this.props.user }

                ></Nav>
                <Body></Body>
                <Footer></Footer>
            </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {

    var NavProps = { 
        ...state.auth, 
        'isLoggedIn':state.app.isLoggedIn
    }

    return {

        user: NavProps,


    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}




export default connect( mapStateToProps, mapDispatchToProps )( Layout );