import React from 'react'
import { getTypes, postRecipes, getDatabase } from '../../actions/index.js'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import NavBar from '../navBar/NavBar.jsx'
import './Form.css'

    function validate(input){
        let errors = {}
        if(!input.name) {
            errors.name = 'Name is require'
        }
        return errors
    }

export default function Form() {
    const dispatch = useDispatch()
    const history = useHistory()
    const type = useSelector(state => state.types) 
    const [error, setError] = useState({})

    const [input, setInput] = useState({
        name: '',
        summary: '',
        score: 0, 
        healthScore: 0,
        image: '',
        steps: '',
        diets: []
    })

    useEffect(() => {
        dispatch(getTypes())
    }, [])

    function handleChange(evt){
        setInput({
            ...input,
            [evt.target.name]: evt.target.value
        })
        setError(validate({
            ...input,
            [evt.target.name]:evt.target.value
        }))
        console.log(input)
    }



    function handleSelect(evt){
        if(!input.diets.includes(evt.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, evt.target.value]
            })
        }
        console.log(input)
    }

    function handleNumber(evt){
        try{
            const parsValue = parseInt(evt.target.value)
            if ((Number.isInteger(parsValue)) && (parsValue >= 0) && (parsValue <= 99)){
                setInput({
                    ...input,
                    [evt.target.name]: parsValue
                })
            }
        }catch{
            console.log('error de parseo')
        }
        console.log(input)
    }

    function handleDelete(evt){
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== evt)
        })
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        await dispatch(postRecipes(input))
        setInput({
            name: '',
            summary: '',
            score: 0, 
            healthScore: 0,
            image: '',
            steps: '',
            diets: []
        })
        await dispatch(getDatabase())
        history.push('/home')
    }

    return (
        <div className="divForm">
            <div>
                <NavBar></NavBar>
            </div>
            <form  className= 'form-register' onSubmit={(evt) => handleSubmit(evt)}>
                <div>
                    <label>Name</label>
                    <input
                    className= "controls"
                        type="text"
                        value = {input.name}
                        name = 'name'
                        onChange = {evt => handleChange(evt)}
                    />
                    {error.name && (<p className= 'error'>{error.name}</p>)}
                </div>

                <div>
                    <label>Summary</label>
                    <input 
                        className= "controls"
                        type="text"
                        value = {input.summary}
                        name = 'summary'
                        onChange = {evt => handleChange(evt)}
                    />
                </div>

                <div>
                    <label>Score</label>
                    <input
                        className= "controls"
                        type="number"
                        value = {input.score}
                        name = 'score'
                        onChange = {evt => handleNumber(evt)}
                    />
                </div>

                <div>
                    <label>Heath score</label>
                    <input
                        className= "controls"
                        type="number"
                        value = {input.healthScore}
                        name = 'healthScore'
                        onChange = {evt => handleNumber(evt)}
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input
                        className= "controls"
                        type="text"
                        value = {input.image}
                        name = 'image'
                        onChange = {evt => handleChange(evt)}
                    />
                </div>

                <div>
                    <label>Steps</label>
                    <input
                        className= "controls"
                        type="text"
                        value = {input.steps}
                        name = 'steps'
                        onChange = {evt => handleChange(evt)}
                    />
                </div>

                <div>
                    <select className= 'select' defaultValue='Diets' onChange={(evt) => handleSelect(evt)}>
                        <option disabled>Diets</option>
                            {type?.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)}
                    </select>  
                </div>
                {(input.name !== '') ?
                <div>
                    <button className = 'btn-neon' type='submit'>Recipes Create</button>
                </div>
                : <p className="error">Name is require</p>
                }
            </form>
            <div className = 'typ'>
                {input.diets.map((el, index) =><div className = 'ty' key = {index}><p>{el}</p>
                <button className= 'but' onClick={() => handleDelete(el)}>x</button></div>)}
            </div>
        </div>
    )
}

