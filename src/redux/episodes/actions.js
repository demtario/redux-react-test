export const episodesFetched = (episodes) => ({
  type: 'FETCH_EPISODES_SUCCESS',
  payload: episodes
});

export const episodesFailure = (error) => ({
  type: 'FETCH_EPISODES_FAILURE',
  error
});