import React from 'react'
import { useDispatch} from 'react-redux';
import { searchId } from '../../actions/index.js'
import {  useHistory } from 'react-router-dom'
import './Card.css'
import spoonacular from '../../assets/spoonacular.svg'

function Card({id, name, image, diets, types}) {
    const dispatch = useDispatch()
    const history = useHistory()
    
    async function handleId(id){
        await dispatch(searchId(id))
        history.push('/detail')
    }

    return (
        <div className ='cover'>
            <div className = 'title'>
                <h3>{name}</h3>   
            </div>
            <div className = 'image'>
                <img src={image} alt= 'image not Found' width ="150px" height ="100px"/>   
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
                    <button className = 'btn-neon' onClick={() => handleId(id)}>Details</button>
                </div>

        </div>
    )
}

export {Card}
