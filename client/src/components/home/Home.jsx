import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipesAll } from '../../actions';
import { Link } from 'react-router-dom';
import { Card } from '../card/Card.jsx'
import Homes from './Home.css';

export default function Home (){
    const dispatch = useDispatch();
    const recipesAll = useSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(getRecipesAll())
    }, [])

    function handleClick(evt){
        evt.preventDefault();
        dispatch(getRecipesAll());
    }

    return(
        <div>
            <Link to = '/recipes'> New Recipe </Link>
            <button onClick={evt => handleClick(evt)}>refresh</button>
        
            <div>
                <select>
                    <option key= 'asc' value = 'asc'>Asc</option>
                    <option key= 'asc' value = 'desc'>Desc</option>
                </select>
                {recipesAll?.map((recipe, index) => {
                return(    
                    <div className='cards'> 
                        <Card key={index} name={recipe.name} image={recipe.image} types={recipe.types} diets={recipe.diets}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}