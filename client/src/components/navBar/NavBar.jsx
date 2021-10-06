import React from 'react'
import {Link} from 'react-router-dom'

function NavBar({types}) {
    return (
        <div>
            <Link to='/Recipes'>Add Recipes</Link>
            <h1>API Recipes</h1>

            <select>

            </select>
        </div>
    )
}

export default NavBar
