import React, {Component} from 'react'

import {Link} from 'react-router'

class BarIndex extends Component{
	render(){
		return (
			<div>
				<ul>
					<li><b>BarIndex Page</b></li>
					<li><Link to="/bar/shaker">My Shaker</Link></li>
					<li><Link to="/bar/cocktails">My Cocktails</Link></li>
					<li><Link to="/bar/ingredients">My Ingredients</Link></li>
				</ul>
			</div>
			)
	}
}

export default BarIndex