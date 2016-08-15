import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class IngredientsByName extends Component{
	constructor(props){
		super(props)
		this.state = {
			ingredients : []
		}
	}
	componentDidMount(){
		$.ajax('http://cocktailapi.herokuapp.com/api/ingredients').then(ingredients=>{
			this.setState({ingredients})
		}).catch(err=>{console.log(err)})
	}
	render(){
		return (
			<div>
				<ul>
					<li>IngredientsByName Page</li>
					{this.state.ingredients.map((el,key)=>{
						return(
						<li key={key}>
							<Link to={`/ingredients/${el.id}`}>{el.name}</Link>
						</li>
						)
					})
				}
				</ul>
			</div>
			)
	}
}

export default IngredientsByName