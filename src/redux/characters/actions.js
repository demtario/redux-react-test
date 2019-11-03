export const charactersFetched = (characters) => ({
  type: 'FETCH_CHARACTERS_SUCCESS',
  payload: characters
});

export const charactersFailure = (error) => ({
  type: 'FETCH_CHARACTERS_FAILURE',
  error
});