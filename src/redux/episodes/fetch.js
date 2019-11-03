import {store} from '../store'
import API from '../../services/api'
import {episodesFetched, episodesFailure} from './actions'

export const fetchEpisodes = async (page) => {
  try {
    const response = await API.get('/episode', {page})

    if(response.status !== 200)
      throw new Error(`Request failed with response status of ${response.status}`)

    const data = await response.json()
    store.dispatch(episodesFetched(data))
  } catch(e) {
    store.dispatch(episodesFailure(e.message))
  }
}