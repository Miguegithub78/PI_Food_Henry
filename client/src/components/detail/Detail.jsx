import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipesId } from '../../actions/index.js';
import './Detail.css';
import NavBar from '../navBar/NavBar.jsx'
import spoonacular from '../../assets/spoonacular.png'

function validate(id) {

    if(id.length <= 6){
        for(let i = 0; i < id.length; i++) {
            if(!Number.isInteger(id[i] * 1)) return false
        }
    }else if( id.length < 36){
        return false
    }
    return true
}


function Detail(props) {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail) 
    const [id, setId] = useState('');

    function handleInput(evt){
        evt.preventDefault();
        setId(evt.target.value);    
    }
    
    function handleSubmit(evt){
        evt.preventDefault();
        if (validate(id)) dispatch(getRecipesId(id)) 
    }
    
    return (
        <div className="wrap">
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <input
                    type = 'text'
                    placeholder = 'Search Id ...'
                    onChange={evt => handleInput(evt)}
                />
                <button className='searchButton' type ='submit' onClick={ (evt) => handleSubmit(evt)}>Search</button>
                <p className = 'par'>supports numbers less than 1000000 or 36 characters</p>
            </div>
            {detail.name ? <h1 className='name'>{detail.name}</h1> : <h1 className='name'>Recipe not Found</h1>}
            <div className = 'card'>
                <div className= 'ima'>
                    <img src={detail.image} className='img' alt= {spoonacular} />
                </div>
                <div className = 'dietss'>
                    <h4>Diets Types</h4>
                    {detail.diets?.map((diet, index) => <p key={index} >{diet}</p>)}
                </div>
                <div className = 'typess'>
                    <h4 >Dish Types</h4>
                    {detail.types?.map((dish, index)=> <p key={index} >{dish.name ? dish.name : dish}</p>)}
                </div>
            </div>
            <div className='score'>
                <div className='scores'>
                    <h3 className = 'h3score'>Score..:{detail.score}</h3>
                </div>
                <div className= 'scores'>
                    <h3 className = 'h3score'>Health score..:{detail.healthScore}</h3>
                </div>
            </div>
            <div className = 'summaries'>
                <div className='summarysteps'>
                    <h3>Summary</h3>
                    <p dangerouslySetInnerHTML={{ __html: detail.summary }} />
                </div>
                <div className='summarysteps'>
                    <h3>Steps</h3>
                    <p>{detail.steps}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail
