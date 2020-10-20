let initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

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