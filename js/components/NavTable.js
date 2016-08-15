import React, {Component} from 'react'

import {Link} from 'react-router'

class NavTable extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log(this.props.children)
	}
	render(){
		return (
			<div>
			<table>
				<thead>
					<tr>
						<th><Link to="/cocktails">Cocktails</Link></th>
						
						<th><Link to="/ingredients">Ingredients</Link></th>

						<th><Link to="/bar">Bar</Link></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><Link to="/cocktails/byname">By Name</Link></td>

						<td><Link to="/ingredients/byname">By Name</Link></td>
						
						<td><Link to="/bar/cocktails">Cocktails</Link></td>

					</tr>
					<tr>
						<td><Link to="/cocktails/bycategory">By Category</Link></td>
						
						<td><Link to="/ingredients/show">Show</Link></td>

						<td><Link to="/bar/ingredients">Ingredients</Link></td>

					</tr>
					<tr>
						<td><Link to="/cocktails/show">Show</Link></td>

						<td></td>
						
						<td><Link to="/bar/shaker">Shakr</Link></td>
						
					</tr>
				</tbody>
			</table>
			{this.props.children}
			</div>
			)
	}
}

export default NavTable