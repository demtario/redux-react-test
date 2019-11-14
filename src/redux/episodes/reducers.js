const initialState = {
  error: false,
  perPage: 20,
  pages: 0,
  byId: {}
}

export const episodes = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_EPISODES_SUCCESS':
      const allEpisodes = state.byId
      action.payload.results.forEach((episode) => {
        allEpisodes[episode.id] = episode
      })
      state.pages = action.payload.info.pages
      state.byId = allEpisodes
      state.error = false
      return {...state}

    case 'FETCH_EPISODES_FAILURE':
      state.error = action.error
      return {...state}

    default:
      return state
  }
}