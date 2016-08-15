import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class CocktailsShow extends Component{
	constructor(props){
		super(props)
		this.state = {
			cocktail: {ingredients:[]}
		}
	}
	componentDidMount(){
		$.ajax(`http://cocktailapi.herokuapp.com/api/cocktails/${this.props.params.id}`).then(cocktail=>{
			this.setState({cocktail})
			console.log(cocktail)
		}).catch(err=>{console.log(err)})
	}
	render(){
		return (
			<div>
				<ul>
					<li>CocktailsShow Page</li>
					<li>{this.state.cocktail.name}</li>
					<ul>
					{this.state.cocktail.ingredients.map((el,key)=>{
						return (
							<li key={key}>
								<Link to={`/ingredients/${el.ingredient.id}`}>
									{el.ingredient.name}
								</Link>
							</li>
							)
						})
					}
					</ul>
				</ul>
			</div>
			)
	}
}

export default CocktailsShow