import {createCocktail} from "../actions/index.js"
import {connect} from 'react-redux';
import React from 'react'

class NewCocktail extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      instructions: ""
    }
  }

handleClick(event){
  event.preventDefault()
  this.addIngredient()
}

handleSubmit(event){
  event.preventDefault()
  this.props.createCocktail(this.state)

}
handleName(event){
  if (event.target.name === 'cocktail_name') {
  this.setState({
    name: event.target.value
  }) } else if (event.target.name === 'description') {
    this.setState({
      description: event.target.value
    })} else if (event.target.name === 'instructions') {
      this.setState({
        instructions: event.target.value
      })}
    }

addIngredient(){
  return (<div><label>Ingredient</label><input type="text" name="ingredient"/></div>)
}

render(){
  return(
    <div>
      <h2>Make a new cocktail</h2>
    <form onSubmit={this.handleSubmit.bind(this)} >
      <label>Name</label> <input type="text" name="cocktail_name" onChange={this.handleName.bind(this)}/><br />
      <label>Description</label> <input type="text" name="description" onChange={this.handleName.bind(this)}/><br />
      <label>Instructions</label> <input type="text" name="instructions" onChange={this.handleName.bind(this)}/><br />
      <input type="submit" />
    </form>
  </div>
  )
}

}

function mapDispatchToProps(dispatch) {
  return{
    createCocktail: function(params){
      let action = createCocktail(params)
      dispatch(action)
    }
  }
}

export default connect(mapDispatchToProps)(NewCocktail)
