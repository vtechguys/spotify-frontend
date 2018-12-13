export const signInForm={
    /* if label is not specified than keys will
    be the label of input */
    firstName:{
     elementType:'input',
     elementConfig:{
         type:'text',
         name:'firstName',
         placeholder:"Enter first name"
     }
    },
    lastName:{
        elementType:'input',
        elementConfig:{
            type:'text',
            name:"lastName",
            placeholder:"Enter last Name"
        }
    },
    dob:{
        elementType:'input',
        elementConfig:{
            type:'text',
            name:"dob",
            placeholder:"Enter dob"
        }
    },

    email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            name:'email',
            placeholder: 'Enter Email'
        }
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            name:'password',
            placeholder: 'Enter your password'
        }
    },
    confirmPassword: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            name:'confirmPassword',
            placeholder: 'Confirm Password'
        }
    },
}
export const loginForm= {
    email: {
        elementType: 'input',
        label:"Email",
        elementConfig: {
            type: 'text',
            name:'email',
            placeholder: 'Enter Email'
        }
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            name:'password',
            placeholder: 'Enter your password'
        }
    }
}

export const loginFormValidations=(values)=>{
let errors={};
if(!values.email)
{
    errors.email="email is required";
}
if(!values.password)
{
    errors.password="password is required";
}
return errors;
}

export const signInFormValidations=(values)=>{
let errors={};
if(!values.email)
{
    errors.email="email is required";
}
return errors;
}