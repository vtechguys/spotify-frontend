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

import Spinner from '../../Components/UI/Spinner/Spinner';



///Layout
class Layout extends Component{



    render (){

        let appJSX = (
            <Spinner></Spinner>
        );
        if(!this.props.app.loadingState){
            appJSX=(
                <Aux>
                    <Nav 

                        appName = { this.props.appName }
                        auth = { this.props.auth }
                        app = { this.props.app }

                    >
                    </Nav>
                </Aux>
            )
        }


        return appJSX
    }
}

const mapStateToProps = (state) => {

    

    return {

        app: state.app,
        auth: state.auth 


    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}




export default connect( mapStateToProps, mapDispatchToProps )( Layout );