import React from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index';
import CocktailsShow from './cocktails_show';
import NewCocktail from './new_cocktail'
export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          <NewCocktail />
          <CocktailsIndex />
          <CocktailsShow />
        </div>

      </div>
    )
};
