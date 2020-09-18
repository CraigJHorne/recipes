import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
      visibility: true,
      visibiltiy2: true
    };

this.toggleVisibility = this.toggleVisibility.bind(this)
this.toggleVisibility2 = this.toggleVisibility2.bind(this)
  }

toggleVisibility(){
    if (this.state.visibility===false){
      this.setState(state=>({visibility: true}))
    }
    else this.setState(state =>({visibility: false}))
  }

toggleVisibility2(){
    if (this.state.visibility2===false){
      this.setState(state=>({visibility2: true}))
    }
    else this.setState(state =>({visibility2: false}))
  }



  render() {
    if (this.state.visibility === true) {
      return (
        <div onClick={this.toggleVisibility} className="recipe-card" >
			<h2>{this.props.name}</h2>
			<img src={this.props.image} alt="recipes"/>
			<div>
				<p>{this.props.blurb}</p>
				<div className="flex "><h4 className="ma3-l">prep: {this.props.prep} </h4><h4 className="ma3-l">cook: {this.props.cook}</h4></div>

		</div>
		</div>
    );
  }

  	else if (this.state.visibility === false && this.state.visibility2 === false){
      return (

      	        <div className="recipe-card-clicked" >
			<h2>{this.props.name}</h2>
			<img src={this.props.image} alt="recipes"/>
			<div>
				<p>{this.props.blurb}</p>
				<div className="flex "><h4 className="ma3-l">prep: {this.props.prep} </h4><h4 className="ma3-l">cook: {this.props.cook}</h4></div>
				<div onClick={this.toggleVisibility2} className="ingredients-method highlight">
				<h3 >Ingredients</h3>


				{this.props.ingredients.map((ingredients, i) => 

    			<p>{i+1}. {ingredients}</p>

				)}

				<h4>Click for the method</h4>

				</div>

				<h3 className="highlight" onClick={this.toggleVisibility}>Close Recipe</h3>

		</div>
		</div>
      );
    }

	else {
      return (

      	        <div className="recipe-card-clicked" >
			<h2>{this.props.name}</h2>
			<img src={this.props.image} alt="recipes"/>
			<div>
				<p>{this.props.blurb}</p>
				<div className="flex "><h4 className="ma3-l">prep: {this.props.prep} </h4><h4 className="ma3-l">cook: {this.props.cook}</h4></div>
				<div onClick={this.toggleVisibility2} className="ingredients-method highlight">
				<h3 >Method</h3>


				{this.props.method.map((method, i) => 

    			<p>{i+1}. {method}</p>

				)}

				<h4>Click for the method</h4>
				</div>

				<h3 className="highlight" onClick={this.toggleVisibility}>Close Recipe</h3>

		</div>
		</div>
      );
    }
  }
}


export default Card;