import React from 'react';
export const CompanyInfo = (props)=>{

    return (
        <div className="navbar-brand">
            <h4 style={{margin:0}}>{props.logo}</h4>
            <span className="" style={{fontSize:15, padding : 0, marginRight :10}}>{props.name}</span>
            <span className="navbar-text" style={{fontSize:12, padding : 0, display:''}}>{props.info}</span>
        </div>
    )

}