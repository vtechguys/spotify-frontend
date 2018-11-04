import React from 'react'
import {Link} from 'react-router-dom'

const Logo = function(props){
    return(
        <Link clasName="navbar-brand" to='/' >{props.children}</Link>
    )
}

export default Logo