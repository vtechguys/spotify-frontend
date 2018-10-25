import React , { Component } from 'react';
import { connect } from 'react-redux';



//import Aux 
import Aux from '../../hoc/Aux';



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
            <Aux>
                
                <Nav 
                    appName = { this.props.appName }
                    user = { this.props.user }

                ></Nav>
                <Body></Body>
                <Footer></Footer>

            </Aux>
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