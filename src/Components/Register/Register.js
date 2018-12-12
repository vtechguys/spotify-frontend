import React,{Component} from 'react';
 import {NavLink} from 'react-router-dom'
 import Input from '../UI/Input/Input'
 import Button from '../UI/Button/Button'
 import {Formik} from 'formik';
 import { signInForm, signInFormValidations } from '../../config/formsConfig';
export const Register =(props)=>{
    let formElements=[];
    let formKeys={};
    for(let key in signInForm){
        formKeys[key]='';
        formElements.push({id:key,config:signInForm[key]})
    }    
    return(
        <React.Fragment>
        <h1 className="form__title">Register Here</h1>
        <Formik
            initialValues={formKeys}
            validate={(values)=>signInFormValidations(values)}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
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
                    <div className="Button__wrapper">
                  <Button type='submit' isValid={isSubmitting}>Register</Button>
                  </div>
                  <div className="switchLink">
                  <NavLink to="/login">Switch To login?</NavLink>
                  </div>     
                  </form>
                    
                )}
                </Formik>
                </React.Fragment>
                )}
