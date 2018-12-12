import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {loginForm, loginFormValidations} from '../../config/formsConfig';
import {Formik} from 'formik';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import nprogress from 'nprogress';
export const Login =(props)=>{
    let formElements=[];
    let formElementKeys={};
    for(let key in loginForm)
    {
        formElementKeys[key]='';
          formElements.push({id:key,config:loginForm[key]})
    }
    return(
        <React.Fragment>
        <h1 className="form__title">Login Here</h1>
           <Formik initialValues={formElementKeys}
            validate={(values)=>loginFormValidations(values)}
            onSubmit={(values, { setSubmitting }) => {
                nprogress.start();
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  nprogress.done();
                  setSubmitting(false);
                }, 400);
              }}>
            {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,})=>(<form className="form"  onSubmit={handleSubmit}>
                {formElements.map((formElement)=>{
                    return <Input label={formElement.config.label || 
                        formElement.id} 
                    key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[formElement.config.elementConfig.name]}
                    errors={errors}
                    touched={touched}                   
                    />
                })
             }
             <div className="Button__wrapper">
             <Button btnType='submit' isValid={isSubmitting}>Login</Button>
             </div>
             <div className="switchLink">
             <NavLink to="/register">switch To Register?</NavLink>
             </div>
             </form>)}
        
         </Formik>
         </React.Fragment>
         )}

