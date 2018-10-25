import React , { Component } from 'react';
import { connect } from 'react-redux';
class Layout extends Component{

    render (){

        return (
            <div>
                <h1>
                    Complete App here Only
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}




export default connect( mapStateToProps, mapDispatchToProps )( Layout );