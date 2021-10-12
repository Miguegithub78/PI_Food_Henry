import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

import spoonacular from '../../assets/spoonacular.svg'

function NavBar() {


    return (
        <div className="navigation">
            <div>
                <img 
                    src={spoonacular}
                    alt = 'image not found'
                />
            </div>
            <div>
                <Link to='/home'>
                    <button className='btn-neon'>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
