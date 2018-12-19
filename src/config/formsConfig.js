import validate from "./../utils/validate";

//AUTH SCREEN FORM

export const signInForm={
    /* if label is not specified than keys will
    be the label of input */
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

        label:'Password',
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

//PROGRAM SCREEN FORM

//Create Program
export const programCreateForm = {
    title:{
        elementType: 'input',
        label: 'Program Title',
        elementConfig: {
            type: 'text',
            name: 'title',
            placeholder: 'Program Title'
        }
    },
    span:{
        elementType: 'input',
        label: 'Program Span',
        elementConfig: {
            type: 'number',
            name:'span',
            placeholder: 4
        }
    },
    programCode: {
        elementType: 'input',
        label: 'Program Code',
        elementConfig: {
            type: 'text',
            name: 'programCode',
            placeholder: 'Program Code'
        }
    },
    description: {
        elementType: 'input',
        label : 'Program Description',
        elementConfig: {
            type: 'text',
            name: 'programDescription',
            placeholder: 'Description about program'
        }
    }


};
export const programCreateFormValidation=(info)=>{
    let errors = {};
    if(info && Object.keys(info).length>0){

        if(info.title!==undefined || info.title===''){
            if(info.title.length<3 || info.title.length>100){
                errors.title = "Program Title must be b/w 3 to 100 char long";
            }
        }
        else{
            errors.title = "Program title is required";

        }
        if(info.span!==undefined){
            var isValidSpan = (typeof(info.span)==="number" && info.span>0 && !isNaN(info.span) );
            if(!isValidSpan){
                errors.span = "Program Span is a number and greater then 0(month/year-not decided)";
            }
        }
        else{
            errors.span = "Program span is required";

        }

        if(info.programCode!==undefined || info.programCode===''){
            if(info.programCode.length<3 || info.programCode.length>10 || typeof(info.programCode)!=="string"){
                errors.programCode = "Program Code must be b/w 3 to 10 char long";
            }
        }
        else{
            errors.programCode = "Program Code is required";

        }
        if(info.description!==undefined || info.description===''){
            if(info.description.length<10 || info.description.length>300 || typeof(info.description)!=="string"){
                errors.description = "Program description must be b/w 10 to 100 char long";
            }
        }
        
        

    }
    else{
        errors.title = "Program title is required";
        errors.span = "Program Span is required";
        errors.programCode = "Program Code isrequired";
    }
    return errors;
    
    
}

//Edit/Update Form
export const programEditForm = {

};
export const programEditFormValidation=(info)=>{
    const errors = {};
    if(info && Object.keys(info).length>0){

        if(info.title!==undefined || info.title===''){
            if(info.title.length<3 || info.title.length>100){
                errors.title = "Program Title must be b/w 3 to 100 char long";
            }
        }
       
        if(info.span!==undefined){
            var isValidSpan = (typeof(info.span)==="number" && info.span>0 );
            if(!isValidSpan){
                errors.span = "Program Span is a number and greater then 0(month/year-not decided)";
            }
        }
        

        
        if(info.description!==undefined || info.description===''){
            if(info.description.length<10 || info.description.length>300 || typeof(info.description)!=="string"){
                errors.description = "Program description must be b/w 10 to 100 char long";
            }
        }
        
        

    }
    return errors;
}



//QUESTION SCREEN


//Question Create
export const validateQuestionInput=(info)=>{

    const errors= {}

    if(info && Object.keys(info).length > 0){
        if(info.programId!==undefined || info.programId===''){
            // console.log(info.programId)
            if(!validate.id(info.programId)){
                errors.programId = "Program Id is Invalid";
            }
        }else{
            errors.programId = "Program Id is required";
        }
        // console.log(errors.programId)
        if(info.subjectId!==undefined || info.subjectId===''){
            // console.log(info.subjectId)
            if(!validate.id(info.subjectId)){
                errors.subjectId = "Subject Id is Invalid";
            }
        }else{
            errors.subjectId = "Subject Id is required";
        }
        // console.log(errors.subjectId)
        if(info.question!==undefined || info.question===''){
            // console.log(info.question)
            if(info.question.length<3 || info.question.length>100){
                errors.question = "Question must be required";
            }
        }else{
            errors.question = "Question is required";
        }
        // console.log(errors.question)

        if(info.options!==undefined ){
            // console.log(info.options)
            if(info.options.length<1){
                errors.options = "Minimum two options must be there";
            }
        }else{
            errors.options = "Options are required";
        }
        // console.log(errors.options)
        if(info.answer!==undefined || info.answer===''){
            // console.log(info.answer)
            if(info.answer.length<0 || info.answer.length>100){
                errors.answer = "Invalid Answer";
            }
        }else{
            errors.answer = "Answer is required";
        }
        // console.log(errors.answer)
        if(info.units!==undefined){
            // console.log(info.units)
            if(info.units.length<0){
                errors.units = "Minimum one unit is required";
            }
        }else{
            errors.units = "Unit is required";
        }
        // console.log(errors.units)
        if(info.author!==undefined || info.author===''){
            // console.log(info.author)
            if(!validate.id(info.author)){
                errors.author = "Invalid Author";
            }
        }else{
            errors.author = "Author is required";
        }
        // console.log(errors.author)
    }else{
        errors.programId = 'Program Id is required'
        errors.subjectId = 'Subject Id is required'
        errors.question = 'Question is required'
        errors.options = 'Options are required'
        errors.answer = 'Answer is required'
        errors.author = 'Author is required'
        errors.units = 'Unit is required' 
    }
    // console.log(errors)
    return errors; 
    
}
//Question Update/Edit
export const  validateQuestionInputEdit=(info)=>{

    const errors= {}

    if(info && Object.keys(info) > 0){
        if(info.programId!==undefined || info.programId===''){
            if(!validate.id(info.programId)){
                errors.programId = "Program Id is Invalid";
            }
        }

        if(info.subjectId!==undefined || info.subjectId===''){
            if(!validate.id(info.subjectId)){
                errors.subjectId = "Subject Id is Invalid";
            }
        }

        if(info.question!==undefined || info.question===''){
            if(info.question.length<3 || info.question.length>100){
                errors.question = "Question must be required";
            }
        }

        if(info.options!==undefined ){
            if(info.options.length<1){
                errors.options = "Minimum two options must be there";
            }
        }

        if(info.answer!==undefined || info.answer===''){
            if(info.answer.length<1 || info.answer.length>100){
                errors.answer = "Invalid Answer";
            }
        }

        if(info.units!==undefined){
            if(info.units.length<0){
                errors.units = "Minimum one unit is required";
            }
        }

        if(info.author!==undefined || info.author===''){
            if(info.author.length<1 || info.auhtor.length>100){
                errors.author = "Invalid Author";
            }
        }

    }

    return errors;
}


//SUBJECT SCREEN


//Subject Create
export const validateSubjectInput=(info)=>{
    const errors = {};
    if(info && Object.keys(info) > -1){
        if(info.courseId || info.courseId===''){
            if(!validate.id(info.courseId)){
                errors.courseId = "Course Id is Invalid";
            }
        }
        else{
            errors.courseId = "Course Id is required";
        }

        if(info.programId || info.programId===''){
            if(!validate.id(info.programId)){
                errors.programId = "Program Id is Invalid";
            }
        }
        else{
            errors.programId = "Program Id is required";
        }

        if(info.title!==undefined || info.title===''){
            if(info.title.length<3 || info.title.length>100){
                errors.title = "Subject Title must be b/w 3 to 100 char long";
            }
        }
        else{
            errors.title = "Subject Title is required";
        }

        if(info.subjectCode!==undefined || info.subjectCode===''){
            if(info.subjectCode.length<3 || info.subjectCode.length>10){
                errors.subjectCode = "Subject Code must be b/w 2 to 10 char long";
            }
        }
        else{
            errors.subjectCode = "Subject Code is required";
        }
    }
    else{
        errors.courseId = "Course Id is required";
        errors.programId = "Program Id is required";
        errors.title = "Subject Title is required";
        errors.subjectCode = "Subject Code is required";
    }
    return errors;
}

//Subject Update/Edit
export const  validateSubjectInputEdit=(info)=>{
    const errors = {};
    if(info){
        if(info.subjectId || info.subjectId===''){
            if(!validate.id(info.subjectId)){
                errors.subjectId = "Subject Id is Invalid";
            }
        }
        else{
            errors.subjectId = "Subject Id is required";

        }
        if(info.courseId || info.courseId===''){
            if(!validate.id(info.courseId)){
                errors.courseId = "Course Id is Invalid";
            }
        }
        

        if(info.programId || info.programId===''){
            if(!validate.id(info.programId)){
                errors.programId = "Program Id is Invalid";
            }
        }
        

        if(info.title!==undefined || info.title===''){
            if(info.title.length<3 || info.title.length>100){
                errors.title = "Subject Title must be b/w 3 to 100 char long";
            }
        }

        if(info.abbreviation!==undefined || info.abbreviation===''){
            if(info.abbreviation.length<2 || info.abbreviation.length>10){
                errors.abbreviation = "Subject abbreviation must be b/w 2 to 10 char long";
            }
        }

        if(info.description!==undefined || info.description===''){
            if(info.description.length<2 || info.description.length>10){
                errors.description = "Subject description must be b/w 2 to 10 char long";
            }
        }
        

        
    }
    else{
       //Nothing to change about it.... 
    }
    return errors;
}

//TEST SCREEN

//Test Create
export const validateTestInput=(info)=>{

    const errors = {}
    if(info && Object.keys(info).length > 0){
        if(info.programId!==undefined || info.programId===''){
            console.log(info.programId)
            if(!validate.id(info.programId)){
                errors.programId = "Program Id is Invalid";
            }
        }else{
            errors.programId = "Program Id is required";
        }

        if(info.courseIds!==undefined || info.courseIds===''){
            if(!validate.id(info.courseIds)){
                errors.courseIds = "Course Id is Invalid";
            }
        }else{
            errors.courseIds = "Course Id is required";
        }

        if(info.subjectId!=undefined || info.subjectId===''){
            if(!validate.id(info.subjectId)){
                errors.subjectId = "Subject Id is Invalid";
            }
        }else{
            errors.subjectId = "Subject Id is required";
        }

        if(info.totalMarks!==undefined){
            var isValidTotalMarks = (typeof(info.totalMarks)==="number" && info.totalMarks>=0 );
            if(!isValidTotalMarks){
                errors.totalMarks = "Total Marks is a number and equal to or greater than 0";
            }
        }else{
            errors.totalMarks = "Total Marks is required";
        }

        if(info.duration!==undefined){
            var isValidDuration = (typeof(info.duration)==="number" && info.duration>0 );
            if(!isValidDuration){
                errors.duration = "Duration is a number and greater than 0";
            }
        }else{
            errors.duration = "Duration is required";
        }

        if(info.topic!==undefined || info.topic===''){
            if(info.topic.length<3 || info.topic.length>100){
                errors.topic = "Topic must be b/w 3 to 100 char long";
            }
        }else{
            errors.topic = "Topic is required";
        }

        if(info.tags!==undefined){
            if(info.tags.length<0){
                errors.tags = "Minimum one tag is required";
            }
        }else{
            errors.tags = "Tags are required";
        }

        if(info.author!==undefined || info.author===''){
            if(!validate.id(info.author)){
                errors.author = "Author is Invalid";
            }
        }else{
            errors.author = "Auhtor is required";
        }

    }else{
        errors.programId = 'Program Id is required'
        errors.courseIds = 'Course Id is required'
        errors.subjectId = 'Subject Id is required'
        errors.totalMarks = 'Total Marks is required'
        errors.duration = 'Duration is required'
        errors.topic = 'Topic is required'
        errors.tags = 'Tags are required'
        errors.author = 'Author is required'
    }

    return errors;
}
//Test Update/Edit
export const  validateTestInputEdit=(info)=>{

    const errors = {}
    if(info && Object.keys(info).length > 0){


        if(info.programId!==undefined || info.programId===''){
            console.log(info.programId)
            if(!validate.id(info.programId)){
                errors.programId = "Program Id is Invalid";
            }
        }

        if(info.courseIds!==undefined || info.courseIds===''){
            if(!validate.id(info.courseIds)){
                errors.courseIds = "Course Id is Invalid";
            }
        }

        if(info.subjectId!=undefined || info.subjectId===''){
            if(!validate.id(info.subjectId)){
                errors.subjectId = "Subject Id is Invalid";
            }
        }

        if(info.testId!==undefined || info.testId===''){
            if(!validate.id(info.testId)){
                errors.testId = "Test Id is Invalid";
            }
        }

        if(info.totalMarks!==undefined){
            var isValidTotalMarks = (typeof(info.totalMarks)==="number" && info.totalMarks>=0 );
            if(!isValidTotalMarks){
                errors.totalMarks = "Total Marks is a number and equal to or greater than 0";
            }
        }

        if(info.duration!==undefined){
            var isValidDuration = (typeof(info.duration)==="number" && info.duration>0 );
            if(!isValidDuration){
                errors.duration = "Duration is a number and greater than 0";
            }
        }

        if(info.topic!==undefined || info.topic===''){
            if(info.topic.length<3 || info.topic.length>100){
                errors.topic = "Topic must be b/w 3 to 100 char long";
            }
        }

        if(info.tags!==undefined){
            if(info.tags.length<0){
                errors.tags = "Minimum one tag is required";
            }
        }

        if(info.author!==undefined || info.author===''){
            if(!validate.id(info.author)){
                errors.author = "Author is Invalid";
            }
        }

    }

    return errors;

}