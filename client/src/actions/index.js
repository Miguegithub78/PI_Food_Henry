import axios from 'axios';

export function getRecipesAll(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}