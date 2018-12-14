import React,{Component} from 'react';
 import {NavLink} from 'react-router-dom'
 import Input from '../UI/Input/Input'
 import Button from '../UI/Button/Button'
 import {Formik} from 'formik';
 import { signInForm, signInFormValidations } from '../../config/formsConfig';
import {connect} from 'react-redux';
import {signUpAsync} from '../../store/actions/auth';
import Modal from '../UI/Modal/Modal';
class Register extends React.Component{
    state={
        show:false
    }
    modalHandler=()=>{
       this.setState((prevState)=>{
           return {show:!prevState.show}
       })
    }
    render(){
let formElements=[];
    let formKeys={};
    for(let key in signInForm){
        formKeys[key]='';
        formElements.push({id:key,config:signInForm[key]})
    }  
    console.log(this.props,this.state);  
    return(
        <React.Fragment>
        <h1 className="form__title">Register Here</h1>
        <Formik
            initialValues={formKeys}
            validate={(values)=>signInFormValidations(values)}
            onSubmit={async (values, { setSubmitting }) => {
                const signUp=await this.props.signUp(values);
                setSubmitting(false);
                this.modalHandler();
              }}>
            {({values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,})=>(
                    <form className="form" onSubmit={handleSubmit}>
                    {formElements.map((formElement)=>{
                        return <Input key={formElement.id} 
                        label={formElement.config.label || 
                            formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[formElement.id]}
                        errors={errors}
                        touched={touched}/>
                    })}
                    {
                this.props.signUpState.isRegisterSuccessful?<Modal 
                show={this.state.show} modalHandler={this.modalHandler}>
                {this.props.signUpState.message}
                </Modal>:!!this.props.signUpState.message?
                    <Modal show={this.state.show} modalHandler={this.modalHandler}>
                    {this.props.signUpState.message}</Modal>:null
            }
                    <div className="Button__wrapper">
                  <Button btnType='submit' isValid={isSubmitting}>Register</Button>
                  </div>
                  <div className="switchLink">
                  <NavLink to="/login">Switch To login?</NavLink>
                  </div>     
                  </form>
                    
                )}
                </Formik>
                </React.Fragment>
                )}
                }
 const mapDispatchToProps=(dispatch)=>{
 return {
     'signUp':(profile)=>dispatch(signUpAsync(profile))
 }
 } 
 const mapStateToProps=(state)=>{
     return {
         'signUpState':state.auth
     }
 }              
export default connect(mapStateToProps,mapDispatchToProps)(Register)