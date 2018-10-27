import React from 'react';

import Aux from '../../hoc/Aux'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button';

export const SearchBar = (props) =>{
    return (
        <Aux>
            <select onChange={props.searchType}>
                <option value="ALL">All</option>
                <option value="USER">User</option>
                <option value="COURSES">Courses</option>
                <option value="GROUP">Group</option>
            </select>
            <div>
                <Input onChange={props.searching}
                    id={"search"}
                >
                    Search
                </Input>       
            </div>
            <div>
                <Button clicked={(e)=>props.onSubmit(e)}>
                    <i className="fa fa-search"></i>
                </Button>
            </div>
        </Aux>

    )
} 