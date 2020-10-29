let initialState = { types_selected: [], colors_selected: [], pokemons_show: [], pokemons: [] }

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONS": {
      return { ...state, pokemons: action.payload }
    }
    case "SET_POKEMONS": {
      return { ...state, pokemons: action.payload }
    }
    case "SET_SEARCH_BY_TEXT": {
      return { ...state, pokemons_show: action.payload, searchString: action.searchString }
    }
    case "SET_FILTER_TYPE": {
      return { ...state, types_selected: [...state.types_selected, action.payload] }
    }
    case "DEL_FILTER_TYPE": {
      let t_s = state.types_selected
      t_s.splice(action.payload, 1)
      return { ...state, types_selected: t_s }
    }
    case "SET_FILTER_COLOR": {
      return { ...state, colors_selected: [...state.colors_selected, action.payload] }
    }
    case "DEL_FILTER_COLOR": {
      let t_s = state.colors_selected
      t_s.splice(action.payload, 1)
      return { ...state, colors_selected: t_s }
    }
    case "SET_FILTER_GENDER": {
      return { ...state, gender_selected: action.payload }
    }
    case "FILTERED": {
      //(if) mix of filters
     if(true){
       let pokemons_filtereds =[]
       action.payload.map( xvar =>pokemons_filtereds.push(state.pokemons.find(e =>{
         return e.pokemon_species.name === xvar.pokemon.name
         
       })))
       return{ ...state,pokemons_filtereds, pokemons_show:pokemons_filtereds }
      }
      break;
    }
    case "FILTEREDC": {
     if(true){
       let pokemons_filtereds =[]
       action.payload.map( xvar =>pokemons_filtereds.push(state.pokemons.find(e =>{
         return e.pokemon_species.name === xvar.name
         
       })))
       return{ ...state,pokemons_filtereds, pokemons_show:pokemons_filtereds }
     }
     break;
    }
    case "FILTEREDG": {
     if(true){
       let pokemons_filtereds =[]
       action.payload.map( xvar =>pokemons_filtereds.push(state.pokemons.find(e =>{
         return e.pokemon_species.name === xvar.pokemon_species.name
         
       })))
       return{ ...state,pokemons_filtereds, pokemons_show:pokemons_filtereds }
     }
     break;
    }
    case "GET_TYPES": {
  return { ...state, types: action.payload }
}
    case "GET_COLORS": {
  return { ...state, colors: action.payload }
}
    case "GET_GENDERS": {
  return { ...state, genders: action.payload }
}


    default: {

  return state
}
  }
}