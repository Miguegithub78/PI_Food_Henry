import React from 'react'
import NavBar from '../navBar/NavBar.jsx'
import notFound from '../../assets/404-error.jpg'
import'./NotFound.css'

function NotFound() {
    return (
        <div>
           <NavBar></NavBar>
           <div className="error">
               <img src={notFound} alt="Not Found" className="images1"/>
           </div>
        </div>
    )
}

export default NotFound
