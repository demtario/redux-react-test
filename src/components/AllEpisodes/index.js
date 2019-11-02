import React, { useEffect, useState, useMemo } from 'react'
import {connect} from 'react-redux'

import API from '../../services/api'
import Episode from '../Episode/index'

import {episodesFetched} from '../../redux/episodes/actions'

import './style.scss'

const AllEpisodes = ({episodes, dispatch}) => {
  const [isAllOpen, setIsAllOpen] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    // Don't fetchs episodes that are already downloaded
    if(Object.keys(episodes.byId).length >= page * episodes.perPage) { return }

    const fetchData = async () => {
      const response = await API.get('/episode', {page})
      const data = await response.json()
      dispatch(episodesFetched(data))
    }
    fetchData()
  }, [page])

  const paginatedEpisodes = useMemo(() => {
    return Object
      .values(episodes.byId)
      .slice((page-1)*episodes.perPage, page*episodes.perPage)
  }, [episodes, page])

  return (
    <div className="episodes-list">
      <h2 className="episodes-list__title">
        All Episodes:
        <span
          className="link"
          onClick={() => setIsAllOpen(!isAllOpen)}
        >
          {isAllOpen ? 'collapse all' : 'show all'}
        </span>
      </h2>

      <div className="episodes-list__episodes">
        { paginatedEpisodes &&
          paginatedEpisodes.map((episode) => (
            <Episode
              key={episode.id}
              episode={episode}
              open={isAllOpen}
              onOpenChange={() => {}}
            />
          ))
        }
      </div>

      <div className="episodes-list__pagination">
        <span
          className={`link ${page === 1 && 'link--disabled'}`}
          onClick={() => setPage(page-1)}
        >
          prev page
        </span>
        {' |'}
        <span
          className={`link ${page === episodes.pages && 'link--disabled'}`}
          onClick={() => setPage(page+1)}
        >
          next page
        </span>
      </div>
    </div>
  )
}

export default connect(({episodes}) => ({episodes}))(AllEpisodes)
