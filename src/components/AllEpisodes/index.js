import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import API from '../../services/api'
import Episode from '../Episode/index'

import {episodesFetched} from '../../redux/episodes/actions'

const AllEpisodes = ({episodes, dispatch}) => {
  const [isAllOpen, setIsAllOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get('/episode')
      const data = await response.json()
      dispatch(episodesFetched(data.results))
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>All Episodes: <button onClick={() => setIsAllOpen(!isAllOpen)}>{isAllOpen ? '-' : '+'}</button></h2>
      { episodes &&
        episodes.map((episode) => (
          <Episode
            key={episode.id}
            episode={episode}
            open={isAllOpen}
            onOpenChange={() => {}}
          />
        ))
      }
    </div>
  )
}

export default connect(({episodes}) => ({episodes}))(AllEpisodes)
