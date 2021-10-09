import React from 'react'
import Cardcss from './Card.css'

function Card({ name, image, diets, types}) {

    return (
        <div className ='cover'>
            <div className = 'title'>
                <h3>{name}</h3>   
            </div>
            <div className = 'image'>
                <img src={image} alt= "img not found" width ="150px" height ="100px"/>   
            </div>
            <div className='foot'>
                <div className = 'diets'>
                    <h4>Diets Types</h4>
                    {diets?.map((diet, index) => <p key={index} >{diet}</p>)}
                </div>
            
                <div className = 'types'>
                    <h4 >Dish Types</h4>
                    {types?.map((dish, index)=> <p key={index} >{dish.name ? dish.name : dish}</p>)}
                </div>
  
            </div>
                <div className = 'buton'>
                    <button className = 'btn-neon'>Details</button>
                </div>

        </div>
    )
}

export {Card}
