import React, {Component} from 'react'

import {Link} from 'react-router'

class CocktailsIndex extends Component{
	render(){
		return (
			<div>
				<ul>
					<li><b>CocktailsIndex Page</b></li>
					<li><Link to="/cocktails/byname">Search Cocktails By Name</Link></li>
					<li><Link to="/cocktails/bycategory">Search Cocktails By Category</Link></li>
					<li><Link to="/cocktails/show">View Cocktail</Link></li>
				</ul>
			</div>
			)
	}
}

export default CocktailsIndex