import React, { useEffect, useState, useMemo, useCallback } from 'react'
import {connect} from 'react-redux'

import Episode from '../Episode/index'
import Error from './error'

import {getIdFromLink} from '../../utils'

import {fetchCharacters} from '../../redux/characters/fetch'
import {fetchEpisodes} from '../../redux/episodes/fetch'

import './style.scss'

const AllEpisodes = ({episodes, characters}) => {
  const [isAllOpen, setIsAllOpen] = useState(false)
  const [page, setPage] = useState(1)



  const paginatedEpisodes = useMemo(() => {
    return Object
      .values(episodes.byId)
      .slice((page-1)*episodes.perPage, page*episodes.perPage)
  }, [episodes, page])



  useEffect(() => {
    // Don't fetchs episodes that are already downloaded
    if(Object.keys(episodes.byId).length > (page-1) * episodes.perPage) { return }
    fetchEpisodes(page)
  }, [page])



  const handleShowAllClick = useCallback(() => {
    const newIsOpen = !isAllOpen
    setIsAllOpen(newIsOpen)

    // Fetch missing characters when open all
    if(newIsOpen) {
      const fetchedChars = Object.keys(characters.byId)

      const charactersToFetch = paginatedEpisodes
        .map((episode) => episode.characters) // Get only charachters url
        .flat() // flat array
        .map((url) => getIdFromLink(url)) // replace urls by id
        .filter((id) => fetchedChars.indexOf(id) === -1) // get only that id's that are not fetched yet

      fetchCharacters(charactersToFetch)
    }
  }, [isAllOpen, characters, paginatedEpisodes])



  return (
    <div className="episodes-list">
      <h2 className="episodes-list__title">
        All Episodes:
        <span
          className="link"
          onClick={handleShowAllClick}
        >
          {isAllOpen ? 'collapse all' : 'show all'}
        </span>
      </h2>

      <div className="episodes-list__episodes">

        { episodes.error &&
          <Error message={episodes.error} />
        }

        {
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
          onClick={() => {setPage(page-1); setIsAllOpen(false)}}
        >
          prev page
        </span>
        {' |'}
        <span
          className={`link ${page === episodes.pages && 'link--disabled'}`}
          onClick={() => {setPage(page+1); setIsAllOpen(false)}}
        >
          next page
        </span>
      </div>
    </div>
  )
}

export default connect(({episodes, characters}) => ({episodes, characters}))(AllEpisodes)
