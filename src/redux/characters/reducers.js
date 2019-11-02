const initialState = {
  byId: {}
}

export const characters = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      const allCharacters = state.byId
      action.payload.forEach((character) => {
        allCharacters[character.id] = character
      })
      return {byId: allCharacters}
    default:
      return state
  }
}