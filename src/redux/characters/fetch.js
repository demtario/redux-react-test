import {store} from '../store'
import API from '../../services/api'
import {charactersFetched, charactersFailure} from './actions'

export const fetchCharacters = async (charactersToFetch) => {
  if(charactersToFetch.length === 0) { return } // skip downloading when all fetched

  try {
    const response = await API.get(`/character/${charactersToFetch.join(',')}`)

    if(response.status !== 200)
      throw new Error(`Request failed with response status of ${response.status}`)

    const data = await response.json()
    store.dispatch(charactersFetched(data))
  } catch(e) {
    store.dispatch(charactersFailure(e.message))
  }

}