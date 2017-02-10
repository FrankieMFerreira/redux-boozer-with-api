import React from 'react';
import {connect} from 'react-redux';
import {currentCocktail} from '../actions/index'

class CocktailsIndex extends React.Component {


  handleClick(cocktailID){
    this.props.currentCocktail(cocktailID)
  }

   renderCocktail(cocktail) {
    return (<li key={cocktail.id}>
      <a to={`/cocktails/${cocktail.id}`} onClick={this.handleClick.bind(this, cocktail.id)}>
        {cocktail.name}
      </a>
    </li>)
  }

  render(){
  return (
  <div>
    <div className='col-md-4'>
      <ul>
        {this.props.cocktails.map(this.renderCocktail.bind(this))}
      </ul>
    </div>
    <div className='col-md-8'>
      {this.props.children}
    </div>
  </div>
)}
};

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}

function mapDispatchToProps(dispatch){
  return {
    currentCocktail: function(id){
      let action = currentCocktail(id)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex)
