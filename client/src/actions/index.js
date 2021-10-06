import axios from 'axios';
import {GET_RECIPES, GET_RECIPES_NAME, GET_RECIPES_ID, GET_TYPES, FILTER_BY_DIETS, SET_DEFAULT_CARD, FILTER_BY_RESOURCES, FILTER_BY_ORDER} from './constants'

export function getRecipesAll(){
    return async function(dispatch){
        try{
            const json = await axios.get('http://localhost:3001/recipes');
            return dispatch({
                type: GET_RECIPES,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function getRecipesName(name) {
    return async function (dispatch) {
        try {
            const recipes = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: GET_RECIPES_NAME,
                payload: recipes.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getRecipesId(id) {
    return async function (dispatch) {
        try {
            let detail = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: GET_RECIPES_ID,
                payload: detail.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTypes() {
    return async function (dispatch) {
        try {
            let types = await axios.get(`http://localhost:3001/types`)
            return dispatch({
                type: GET_TYPES,
                payload: types.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getFilterByDiets(payload){
    return {
        type: FILTER_BY_DIETS,
        payload: payload
    }

}

export function setDefaultCards(){
    return{
        type: SET_DEFAULT_CARD,
    }

}

export function filterByResources(payload){
    return {
        type: FILTER_BY_RESOURCES,
        payload: payload
    }
}

export function filterByOrder(payload){
    console.log(payload)
    return {
        type: FILTER_BY_ORDER,
        payload: payload
    }
}