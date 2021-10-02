
const inicialState ={
    recipes: []
}
const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'GET_RECIPES': 
            return {
                ...state,
                recipes: action.payload
            }

        default: return state
    }

}

export default rootReducer;