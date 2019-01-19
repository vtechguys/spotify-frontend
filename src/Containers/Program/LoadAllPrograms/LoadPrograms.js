import React from 'react';
import ListItems from './../../../Components/UI/ListItems/ListItems';
const loadPrograms = (props) =>{
    console.log(props);
    if(!props.programs || props.programs && props.programs.length ===0){
        props.loadListItems()

    }


    return (
        <div>
            load programs here:-
            <ListItems click={ props.programClickHandler } listItems={ props.programs||[] }/>
        </div>
    )
}
export default loadPrograms;