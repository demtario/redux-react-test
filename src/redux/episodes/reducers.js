export const episodes = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_EPISODES_SUCCESS':
      return [...action.payload]
    default:
      return state
  }
}