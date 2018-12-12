import React from 'react';
import './Input.css';
const Input = (props) => {
    let inputElement=null;
    let classesToApply=['form__element--input'];
    let {elementType,elementConfig,
        label,
        errors,touched,...inputProps}=props;
       if(errors[elementConfig.name] && touched[elementConfig.name])
       {
           classesToApply.push('form__element--input--error')
       }
    switch(props.elementType)
    {
        case 'input':
        inputElement=<input className={classesToApply.join(' ')} 
        {...inputProps} {...elementConfig}/>;
        break;
        case 'dropdown':
        inputElement=<select className="Dropdown" {...inputProps}>{elementConfig.options.map((option)=>{
        return <option key={option.displayValue}>{option.displayValue}</option>})}
        </select>
        break;
        default:
        inputElement=<input/>
    }
    return (
        <div className="form__element">
            <label className="form__element--label">{label}</label>
            {inputElement}
            <div className="form__element--error">
            {errors[elementConfig.name] 
                && touched[elementConfig.name] 
                && errors[elementConfig.name]}
            </div>
            </div>
    );
};

export default Input;