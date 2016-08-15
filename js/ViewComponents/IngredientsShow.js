import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class IngredientsShow extends Component{
	constructor(props){
		super(props)
		this.state = {
			ingredient: {cocktails:[]}
		}
	}
	componentDidMount(){
		$.ajax(`http://cocktailapi.herokuapp.com/api/ingredients/${this.props.params.id}`).then(ingredient=>{
			this.setState({ingredient})
			console.log(ingredient)
		}).catch(err=>{console.log(err)})
	}
	render(){
		return (
			<div>
				<ul>
					<li>IngredientsShow Page</li>
					<li>{this.state.ingredient.name}</li>
					<ul>
						{this.state.ingredient.cocktails.map((el, key)=>{
							return (
								<li key={key}>
									<Link to={`/cocktails/${el.cocktail.id}`}>
										{el.cocktail.name}
									</Link>
								</li>)
						})}
					</ul>
				</ul>
			</div>
			)
	}
}

export default IngredientsShow