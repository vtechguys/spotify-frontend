import React from 'react';
export const CompanyInfo = (props)=>{

    return (
        <div className="companyInfo">
            <h4>{props.name}</h4>
            <h4>{props.logo}</h4>
            <h4>{props.info}</h4>
            Add redirection when clicked to home '/'
        </div>
    )

}