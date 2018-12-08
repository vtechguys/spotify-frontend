import React from 'react';
const createProgram = (props) =>{
    const program = {
        published:false,
        courses:Array,
        programId:"A5MkzNRf",
        title:"B.Tech",
        programCode:"ETEC 403",
        span:4,
        description:"01234567890",
        createdAt:"2018-11-04 06:38:09.517"
    }
    console.log(props)
    
    return (
        <div>
            <button onClick={()=>props.create(program)}>createProgram</button> 
        </div>
    )
}
export default createProgram;