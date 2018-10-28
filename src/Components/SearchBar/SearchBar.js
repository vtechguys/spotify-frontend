import React from 'react';

import Auxilary from '../../hoc/Auxilary'
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
            <Auxilary>
            <div className='row'>
            <div className='col-md-2' style={{paddingTop : 0}}>
                <select ref="searchOption" className="custom-select">
                    <option value="ALL">All</option>
                    <option value="USER">User</option>
                    <option value="COURSES">Courses</option>
                    <option value="GROUP">Group</option>
                </select>
                </div>
            <div className='col-md-8'>
                    <Input onChange={this.searching}
                        id={"search"}
                    >
                        Search
                    </Input>       
                </div>
                <div className='col-md-2'>
                    <Button clicked={this.onSumbit} className="success">
                        Search
                    </Button>
                </div>
                </div>
            </Auxilary>
    
        )
    }
} 
