import React from 'react'
import Logo from '../../../Components/UI/Logo/Logo'
import Search from '../../../Components/UI/Search/Search'


const Nav = function(props){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Logo>Flop Brand</Logo>
            <Search/>
        </nav>
    )
}

export default Nav