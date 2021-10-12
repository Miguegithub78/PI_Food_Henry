import React from 'react'
import NavBar from '../navBar/NavBar.jsx'
import './LandingPage.css'
import spoonacular from '../../assets/spoonacular-sp.png'
import henry from '../../assets/logo-white.png'

function LandingPage() {
    return (
        <div className="Cover">
            <div className="Bar">
                <NavBar></NavBar>
            </div>    
            <div className="Landing">
                <h1 className="Fuente">Wellcome</h1>
                <div className="imges">
                    <div>
                        <img src={spoonacular} alt='image not found' className= 'spoon'/>
                    </div>
                    <div>
                        <img src={henry} alt='image not found' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
