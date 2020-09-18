import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import AddRecipe from '../Components/AddRecipe';
import '../Containers/App.css';
import { Link } from 'react-router-dom';
import { setSearchField, requestRecipes } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRecipes.searchField,
		recipes: state.requestRecipes.recipes,
		isPending: state.requestRecipes.isPending,
		error: state.requestRecipes.error
	}
}

const mapDispatchToProps = (dispatch)  => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRecipes: () => requestRecipes(dispatch)
	}
}


class App extends Component {

	componentDidMount() {
		this.props.onRequestRecipes();
}


	render() {
		const { recipes, searchField, onSearchChange, isPending } = this.props;
		const filteredRecipes = recipes.filter(recipe => {
			return recipe.name.toLowerCase().includes(searchField.toLowerCase());
		})
	return isPending  ?
		<h1>Loading</h1> :
		(
		<Router>
		<Switch>
        <Route exact path="/">
		<div className="header">
			<SearchBox className="mh4" searchChange={onSearchChange}/>
			<h1 className="mh4 headline">Recipes</h1>
			<Link className="headline2" to={"/addrecipe"}><h4>+ Add Recipe</h4></Link>
		</div>
		<div className="tc bg-near-white mv2">
		<CardList recipes={filteredRecipes} />
		</div>
		</Route>
        <Route path="/addrecipe">
        <div className="header">
		<h1 className="mh4 headline">Add Recipe</h1>
		<Link className="headline2" to={"/"}><h4>Home</h4></Link>
		</div>
		<AddRecipe />
		</Route>
		</Switch>
		</Router>
	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);