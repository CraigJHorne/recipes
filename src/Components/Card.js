import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
      visibility: false
    };

this.toggleVisibility = this.toggleVisibility.bind(this)
  }

toggleVisibility(){
    if (this.state.visibility==false){
      this.setState(state=>({visibility: true}))
    }
    else this.setState(state =>({visibility: false}))
  }

  render() {
    if (this.state.visibility) {
      return (
        <div onClick={this.toggleVisibility} className="card2" >
			<h2>{this.props.name}</h2>
			<img src={this.props.image} alt="recipes"/>
			<div>
				<p>{this.props.blurb}</p>
				<div className="flex "><h4 className="ma3-l">prep: {this.props.prep} </h4><h4 className="ma3-l">cook: {this.props.cook}</h4></div>
				<h3 >Method</h3>


				{this.props.method.map((method, i) => 

    			<p>{i+1}. {method}</p>

				)}

				<h4>Click for the ingredients</h4>

		</div>
		</div>
    );
  }
	else {
      return (

      	<div onClick={this.toggleVisibility} className="tc bg-light-green dib v-top br3 pa3 ma2 grow bw2 shadow-5 measure-narrow" >
			<h2>{this.props.name}</h2>
			<img className="br3" src={this.props.image} alt="recipes"/>
			<div>
			
				<p>{this.props.blurb}</p>
				<div className="flex "><h4 className="ma3-l">prep: {this.props.prep} </h4><h4 className="ma3-l">cook: {this.props.cook}</h4></div>
				<h3>Ingredients</h3>

				{this.props.ingredients.map((ingredients, i) => 

    			<p>{i+1}. {ingredients}</p>

				)}

				<h4>Click for the method</h4>

		</div>
		</div>
      );
    }
  }
}


export default Card;