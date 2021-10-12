import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import henry from '../../assets/henry.jpg'
import spoonacular from '../../assets/spoonacular.svg'

function NavBar() {


    return (
        <div className="navigation">
            <div className="contimg">
                <div>
                    <img 
                    src={spoonacular}
                    alt = 'image not found'
                    />
                </div>
                <div>
                    <img 
                    src={henry}
                    alt = 'image not found'
                    height = '100px' width = '100px'
                    />
                </div>
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
