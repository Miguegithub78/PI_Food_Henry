import {GET_RECIPES, GET_RECIPES_NAME, GET_RECIPES_ID, GET_TYPES, FILTER_BY_DIETS, SET_DEFAULT_CARD,FILTER_BY_RESOURCES, FILTER_BY_ORDER, FILTER_BY_SEARCHBAR, ORDER_BY_SCORE, POST_RECIPES} from '../actions/constants.js'
const inicialState ={
    recipes: [],
    recipesAll: [],
    types: []
}
const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_RECIPES: 
            return {
                ...state,
                recipes: action.payload,
                recipesAll: action.payload
            }

        case GET_RECIPES_NAME:
            return {
                ...state,
                recipes: action.payload
            }

        case GET_RECIPES_ID:
            return {
                ...state,
                recipes: action.payload
            }

        case POST_RECIPES:
            return {
                ...state,
            }

        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }

        case FILTER_BY_DIETS:
            const recipes_All = state.recipesAll

            const filtByDiets = action.payload === 'Filter by type' ? 
            state.recipesAll : recipes_All.filter(recipe => {
                if (recipe.diets.length > 0) {
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                }
                
                if ((action.payload === 'vegetarian') && (recipe.hasOwnProperty('vegetarian')) && (recipe.vegetarian === true)) return recipe
                
                if ((action.payload === 'dairyFree') && (recipe.hasOwnProperty('dairyFree')) && (recipe.dairyFree === true)) return recipe
                })
            return{
                ...state,
                recipes: filtByDiets
            }

        case SET_DEFAULT_CARD:
            const recipes = state.recipesAll
            return {
                ...state,
                recipes: recipes
            }

        case FILTER_BY_RESOURCES:
            const recipesToFilter = state.recipesAll
            const typeFilter = action.payload === 'Filter by Source' ? state.recipesAll : recipesToFilter?.filter(recipe =>{ 
                if ((action.payload === 'created') && (!recipe.hasOwnProperty('idApi'))) return recipe

                if ((action.payload === 'apiobtn') && (recipe.hasOwnProperty('idApi'))) return recipe
            })
            return{
                ...state,
                recipes: typeFilter
            }

        case FILTER_BY_ORDER:
            const recypesByOrder = action.payload === 'up' ? state.recipesAll.sort((a, b) => {
                if (a.name > b.name) return 1
                else return -1
            }): state.recipesAll.sort((a, b) => {
                if (a.name < b.name) return 1
                else return -1
            })
            return{
                ...state,
                recipes: recypesByOrder
            }
        
        case ORDER_BY_SCORE:
            console.log(action.payload)
            const recypesByScore = action.payload === 'SSc' ? state.recipesAll.sort((a, b) => {
                console.log(a.score, b.score)
                if ((a.score - b.score) < 0) return 1
                else return -1
            }) : state.recipesAll.sort((a, b) => {
                console.log(a.healthScore, b.healthScore)
                if ((a.healthScore - b.healthScore) < 0) return 1
                else return -1
            })
            return{
                ...state,
                recipes: recypesByScore
            }

        case FILTER_BY_SEARCHBAR:
            const filtSearch = state.recipesAll
            const filtOnState = filtSearch.filter((recipe) =>{
                let name = recipe.name.toLowerCase() 
                if (name.includes(action.payload)) return recipe
            })
        return{
                ...state,
                recipes: filtOnState   
            }

        default: return state
    }

}

export default rootReducer;