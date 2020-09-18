import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CardList from '../Components/CardList';
import { recipes } from '../Components/recipes';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import AddRecipe from '../Components/AddRecipe';
import '../Containers/App.css';
import { Link } from 'react-router-dom';




class App extends Component {
	constructor() {
		super()
		this.state = {
			recipes: recipes,
			searchfield: ""
		}
	}

	componentDidMount() {
		fetch({ recipes })
		.then(response => response.json())
		.then(users => this.setState({ recipes: users }));
}




	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render() {
		const filteredRecipes = this.state.recipes.filter(recipe => {
			return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return (
		<Router>
		<Switch>
        <Route exact path="/">
		<div className="tc bg-dark-green mv2 flex justify-center mh1">
			<SearchBox className="mh4" searchChange={this.onSearchChange}/>
			<h1 className="mh4">Recipes</h1>
			<Link className="mh4" to={"/addrecipe"}><h2>Add Recipe</h2></Link>
		</div>
		<div className="tc bg-near-white mv2">
		<Scroll>
		<CardList recipes={filteredRecipes} />
		</Scroll>
		</div>
		</Route>
        <Route path="/addrecipe">
        <div className="tc">
		<h1>Add Recipe</h1>
		<Link to={"/"}><h2>Home</h2></Link>
		<Scroll>
		<AddRecipe />
		</Scroll>
		</div>
		</Route>
		</Switch>
		</Router>
	);
	}
}

export default App;