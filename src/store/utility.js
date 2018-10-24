const expandArray = (array) => {
    let element = array[0];
    let newArray = [...array];

    if(typeof(element)==="object"){
        for( let i = 0; i < array.length; i++ ){
            newArray.push(expandObj(array[i]));
        }
    }
    
    return newArray;
}

const expandObj = (obj) => {
    let keys = Object.keys(obj);
    let newObj = { ...obj };
    keys.forEach(key=>{
        if(typeof(obj[key])==="object"){
            //Only dealing with array and {} not functions
            if(obj[key] instanceof Array){
                newObj[key] = expandArray(obj[key]);
            }
            else{
                newObj[key] = expandObj(obj[key]); 
            }
        }
        
    });

    return newObj;
}


export const updateObj = (oldObj,prp) =>{
    let newObj = { ...oldObj, ...prp };
    let keys = Object.keys(oldObj);

    keys.forEach(key=>{
        if(typeof(oldObj[key])==="object"){
            //Only dealing with array and {} not functions
            newObj[key] = expandObj(oldObj[key]);
        }
    });

    return newObj;
}