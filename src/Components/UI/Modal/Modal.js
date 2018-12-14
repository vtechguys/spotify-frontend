import React from 'react';
import Aux from '../../../hoc/Auxilary';
import './Modal.css'
import BackDrop from '../BackDrop/BackDrop';
class Modal extends React.Component{
   shouldComponentUpdate(nextProps,nextState)
   {
           //console.log(nextProps,this.props);
           return nextProps.show!==this.props.show || nextProps.children!==this.props.children
   }
   componentWillUpdate(){
//console.log("inside component will update")
   }
        render(){     
                //console.log(this.props.show)
return (<Aux><BackDrop show={this.props.show} clicked={this.props.modalHandler}/>
       { this.props.show?<div className="Modal">
        {this.props.children}
</div>:null}
</Aux>)
   }
}    
export default Modal;