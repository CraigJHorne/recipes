import { CHANGE_SEARCH_FIELD,
		REQUEST_RECIPES_PENDING,
		REQUEST_RECIPES_SUCCESS,
		REQUEST_RECIPES_FAILED } from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchRecipes = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})

		default:
			return state;
	}
}

const initialStateRecipes = {
	isPending: false,
	recipes: [],
	error: ''
}

export const requestRecipes = (state=initialStateRecipes, action={}) => {
	switch(action.type) {
		case REQUEST_RECIPES_PENDING:
			return Object.assign({}, state, { isPending: true})
		case REQUEST_RECIPES_SUCCESS:
			return Object.assign({}, state, { recipes: action.payload, isPending: false })
		case REQUEST_RECIPES_FAILED:
			return Object.assign({}, state, { error: action.payload, iPending: false })
		default:
			return state;
	}
}