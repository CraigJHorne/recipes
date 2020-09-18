export const initialState = {
	recipeList: [],	
};

const reducer = (state, action) => {

	switch (action.type) {
		case "ADD_TO_RECIPES":
			return { 
				...state,
				recipeList: [...state.recipeList, action.item],
			};


		default:
			return state;

	}
}

export default reducer;