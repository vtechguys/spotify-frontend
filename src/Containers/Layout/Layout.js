import React , { Component } from 'react';
import { connect } from 'react-redux';



//import Auxilary 
import Auxilary from '../../hoc/Auxilary';



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
                <Auxilary>
                    <Nav 
                        companyName = {this.props.companyName}
                        companyLogo = {this.props.companyLogo}
                        companyInfo = {this.props.companyInfo}
                        appName = { this.props.appName }
                        appLogo = {this.props.appLogo}


                        auth = { this.props.auth }
                        app = { this.props.app }

                    >
                    </Nav>
                    <Body
                          companyName = {this.props.companyName}
                          companyLogo = {this.props.companyLogo}
                          companyInfo = {this.props.companyInfo}
                          appName = { this.props.appName }
                          appLogo = {this.props.appLogo}

                          auth = { this.props.auth }
                          app = { this.props.app }
                    >

                    </Body>
                </Auxilary>
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