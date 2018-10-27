import React from 'react';

import Aux from '../../hoc/Aux'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button';
export class SearchBar extends React.Component{
    state = {
        searchText:"",
    }
    searching=(event)=>{
        let text = event.target.value;
        if(text && text.trim().length>0){
            this.setState({
                searchText:text
            })
        }
        else{
            return;
        }
    }
    onSumbit = (event)=>{
        if(this.state.searchText.trim().length>0){
            this.props.onSumbit(this.refs.searchOption.value,this.state.searchText)
        }
        else{
            return;
        }
    }

    render(){
        return (
            <Aux>
                <select ref="searchOption">
                    <option value="ALL">All</option>
                    <option value="USER">User</option>
                    <option value="COURSES">Courses</option>
                    <option value="GROUP">Group</option>
                </select>
                <div>
                    <Input onChange={this.searching}
                        id={"search"}
                    >
                        Search
                    </Input>       
                </div>
                <div>
                    <Button clicked={this.onSumbit}>
                        <i className="fa fa-search"></i>
                    </Button>
                </div>
            </Aux>
    
        )
    }
} 
