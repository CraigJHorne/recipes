import React from 'react';
import Card from './Card';



const CardList = ({ recipes }) => {
		return (
			<div className="card">
				{
					recipes.map((user, i) => {
						return (
							<Card 
								key={i}
								id={recipes[i].id}
								name={recipes[i].name}
								blurb={recipes[i].blurb}
								ingredients={recipes[i].ingredients}
								prep={recipes[i].prep}
								cook={recipes[i].cook}
								method={recipes[i].method}
								image={recipes[i].imageOne}
							/>
						);
					})
				}
			</div>
		);
}

export default CardList;