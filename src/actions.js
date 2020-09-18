import { CHANGE_SEARCH_FIELD,
		REQUEST_RECIPES_PENDING,
		REQUEST_RECIPES_SUCCESS,
		REQUEST_RECIPES_FAILED } from './constants.js'
import { recipes } from './Components/recipes';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRecipes = (dispatch) => {
	dispatch({ type: REQUEST_RECIPES_PENDING })
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type: REQUEST_RECIPES_SUCCESS, payload: data }))
	.catch(error => dispatch({ type: REQUEST_RECIPES_FAILED, payload: error }))
}