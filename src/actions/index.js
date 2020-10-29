import axios from 'axios'
import Global from '../Global'
const { url } = Global
export function setPokemons(pokemons) {
  return {
    type: "SET_POKEMONS",
    payload: pokemons
  };
}


export const getFilters = () => {
  return dispatch => {
    return axios.get(url + 'type/').then(res => {
      dispatch({ type: "GET_TYPES", payload: res.data.results })

      axios.get(url + "pokemon-color/").then(res => {
        dispatch({ type: "GET_COLORS", payload: res.data.results })
      })
      axios.get(url + "gender/").then(res => {
        dispatch({ type: "GET_GENDERS", payload: res.data.results })
      })

    })

  };
};


//Call to all pokemons
export const getPokemons = () => {
  return dispatch => {
    return axios.get(url + 'pokedex/national').then(res => {
      dispatch({ type: "GET_POKEMONS", payload: res.data.pokemon_entries })
      localStorage.setItem("pokemons", JSON.stringify(res.data.pokemon_entries))
    })

  };
};

//REFRESH FILTRESS
export const refreshF = (TYPEs) => {
  return dispatch => {
    return axios.get(url + 'type/' + TYPEs).then(res => {
      dispatch({ type: "FILTERED", payload: res.data.pokemon })
      // console.log(res.data.pokemon)
    })
  }
}
export const refreshC = (Color) => {
  return dispatch => {
    return axios.get(url + 'pokemon-color/' + Color).then(res => {
      dispatch({ type: "FILTEREDC", payload: res.data.pokemon_species })
      // console.log(res.data.pokemon)
    })
  }
}
export const refreshG = (GenderID) => {
  return dispatch => {
    return axios.get(url + 'gender/' + GenderID).then(res => {
      dispatch({ type: "FILTEREDG", payload: res.data.pokemon_species_details})
      // console.log(res.data)
    })
  }
}

