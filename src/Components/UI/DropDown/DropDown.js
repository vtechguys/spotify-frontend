import React from 'react';

export const DropDown = (props) =>{

    let listJSX = null;
    if(props.dropDownList && props.dropDownList.length>0){
        listJSX = (
            props.dropDownList.map(list=>{
                
                return (
                    <div 
                    style={{padding : 2}}
                        onClick={
                            ()=>{

                                return props.clicked(list)
                            }
                            
                        } 
                        key={list.type}
                    >
                            
                            {list.name}

                    </div>
                )
                
                
            })
        )
    }
    return (
        <div className="DropDown">

            {
                listJSX
            }

        </div>
    )
}