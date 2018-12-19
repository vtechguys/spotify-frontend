import React from 'react';
import ListItems from './../../../Components/UI/ListItems/ListItems';
const loadPrograms = (props) =>{
    return (
        <div>
            <ListItems click={ props.programClickHandler } listItems={ props.programs }/>
        </div>
    )
}
export default loadPrograms;