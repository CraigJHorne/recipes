import React, { Component } from 'react';
import { recipes } from '../Components/recipes';
import '../Containers/App.css';




class AddRecipe extends React.Component {

 constructor(props){
   super(props);
   this.state = { 
   				recipes2: recipes,
   				newRecipe: { id: '', name: '', blurb: '', imageOne: "/images/recipe0.jpg"},
   				};
 

 }
;

 render() {
   return (
     <React.Fragment>

         <label htmlFor="recipeName">Recipe Name</label>
         <input
           type="text"
           name="recipeName"
           value={this.state.recipeName}
           onChange={this.nameChange}
         />
         <label htmlFor="recipeName">Recipe Prep Time</label>
         <input
           type="text"
           name="recipePrep"
           value={this.state.recipePrep}
           onChange={this.prepChange}
         />
         <label htmlFor="recipeName">Recipe Cook</label>
         <input
           type="text"
           name="recipeCook"
           value={this.state.recipeCook}
           onChange={this.cookChange}
         />
         <label htmlFor="recipeName">Recipe Blurb</label>
         <input
           type="text"
           name="recipeBlurb"
           value={this.state.recipeBlurb}
           onChange={this.blurbChange}
         />

     </React.Fragment>
   );
 }
}

export default AddRecipe;