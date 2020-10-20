import axios from 'axios'

export function setTextTitle(e) {
  return {
    type: "TEXT_TITLE",
    payload: e.target.value
  };
}

//this is a THUNK!
export const getFilters = () => {
  return dispatch => {
    return axios.get('https://pokeapi.co/api/v2/type/').then(res => {
      dispatch({ type: "GET_TYPES", payload: res.data.results })

      axios.get("https://pokeapi.co/api/v2/pokemon-color/").then(res => {
        dispatch({ type: "GET_COLORS", payload: res.data.results })
      })
      axios.get("https://pokeapi.co/api/v2/gender/").then(res => {
        dispatch({ type: "GET_GENDERS", payload: res.data.results })
      })

    })

  };
};

