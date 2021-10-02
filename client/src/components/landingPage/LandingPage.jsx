import React from 'react'
import { Link } from 'react-router-dom'
import Landing from './LandingPage.css'

function LandingPage() {
    return (
        <div className="Cover">
            <div className="Landing">
                <h1 className="Fuente">Wellcome to Recipes App</h1>
                <Link to='/home'>
                    <button className='Home'>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
