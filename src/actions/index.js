import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1'

export function fetchCocktails(){
  const cocktails = axios.get(`${BASE_URL}/cocktails`).then(res => res.data)

  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function createCocktail(params){
  const cocktail = axios.post(`${BASE_URL}/cocktails`,
    {method: 'POST',
    body: params,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }});

  return {
    type: 'CREATE_COCKTAIL',
    payload: params.cocktail
  }
}

export function currentCocktail(cocktailID){
  return {
    type: 'UPDATE_CURRENT_COCKTAIL',
    payload: cocktailID
  }
}
