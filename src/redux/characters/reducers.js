const initialState = {
  error: false,
  byId: {}
}

export const characters = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      const allCharacters = state.byId
      action.payload.forEach((character) => {
        allCharacters[character.id] = character
      })
      return {byId: allCharacters, error: false}

    case 'FETCH_CHARACTERS_FAILURE':
      state.error = action.error
      return {...state}

    default:
      return state
  }
}