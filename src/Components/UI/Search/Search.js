import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Search = function(props){
    return(
        <form className="form-inline my-2 my-lg-0">
             <Input className="form-control mr-sm-2" id='search' type="search" placeholder="Search" aria-label="Search">Search for...</Input>
             <Button className="outline-success" type="submit">Search</Button>
        </form>
    )
}

export default Search