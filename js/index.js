// bring in React
import React, {Component} from 'react'
// bring in ReactDOM.render (using destructuring)
import {render} from 'react-dom'
// just like we have seen before - put the component on the page!

import {Router, IndexRedirect, IndexRoute, Route, browserHistory} from 'react-router'

import BarIndex from './ViewComponents/BarIndex'
import BarCocktails from './ViewComponents/BarCocktails'
import BarIngredients from './ViewComponents/BarIngredients'
import BarShaker from './ViewComponents/BarShaker'
import CocktailsByCategory from './ViewComponents/CocktailsByCategory'
import CocktailsByName from './ViewComponents/CocktailsByName'
import CocktailsIndex from './ViewComponents/CocktailsIndex'
import CocktailsShow from './ViewComponents/CocktailsShow'
import IngredientsByName from './ViewComponents/IngredientsByName'
import IngredientsShow from './ViewComponents/IngredientsShow'

import NavTable from './components/NavTable'

// create a component
class App extends Component {
    // instance method render
  render(){
    return(
      <Router history={browserHistory}>
      <Route path='/' component={NavTable}>
        <IndexRedirect to='/ingredients' />
        <Route path='ingredients'>
          <IndexRedirect to='byname' />
        	<Route path="byname" component={IngredientsByName}/>
        	<Route path=":id" component={IngredientsShow}/>
        </Route>
        <Route path='cocktails'>
        	<IndexRoute component={CocktailsIndex}/>
        	<Route path="byname" component={CocktailsByName}/>
        	<Route path="bycategory" component={CocktailsByCategory}/>
        	<Route path=":id" component={CocktailsShow}/>
        </Route>
        <Route path='bar'>
        	<IndexRoute component={BarIndex} />
        	<Route path="cocktails" component={BarCocktails}/>
        	<Route path="ingredients" component={BarIngredients}/>
        	<Route path="shaker" component={BarShaker}/>
        </Route>
       </Route>
      </Router>
    )
  }
}

// export this component to be used somewhere else (we could have done export default class App above as well)
export default App

render(<App/>, document.getElementById("container"))