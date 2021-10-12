import React from 'react'
import NavBar from '../navBar/NavBar.jsx'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className="Cover">
            <div className="Bar">
                <NavBar></NavBar>
            </div>    
            <div className="Landing">
                <h1 className="Fuente">Wellcome to Recipes App</h1>

            </div>
        </div>
    )
}

export default LandingPage
