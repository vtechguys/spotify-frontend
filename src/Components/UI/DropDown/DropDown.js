import React from 'react';

export const DropDown = (props) =>{

    return (
        <div className="DropDown">

            {
                props.dropDownList.map(list=>{
                    
                    return (
                        <div 
                            onClick={
                                (event,list) =>{
                                    console.log("printing",list);
                                    return props.clicked(list)
                                }
                            } 
                            key={list.type}
                        >
                                {list.name}
                        </div>
                    )
                })
            }
        </div>
    )
}