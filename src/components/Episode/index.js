import React, { useMemo, useCallback } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import API from '../../services/api'

import Collapse from '../Collapse'
import CharactersList from './charactersList'

import {getIdFromLink} from '../../utils'

import {charactersFetched} from '../../redux/characters/actions'

import './style.scss'
const propTypes = {
  /** Object of the current episode */
  episode: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    air_date: PropTypes.string,
    characters: PropTypes.arrayOf(PropTypes.string),
  }),
  /** state to controll collapse from top */
  open: PropTypes.bool,
  /** function to raport of open */
  onOpenChange: PropTypes.func,
}
const defaultProps = {
  episode: {
    id: null,
    name: '',
    air_date: '',
    characters: []
  },
  open: false,
  onOpenChange: () => {}
}

const Episode = ({episode, open, onOpenChange, dispatch, characters}) => {

  const { id, name, air_date } = episode

  const episodeCharacters = useMemo(() => (
    episode.characters.map((url) => getIdFromLink(url))
  ), [episode.characters])

  const onOpen = useCallback((isOpen) => {
    onOpenChange(isOpen)

    if(!isOpen) { return }
    const fetchData = async () => {
      // Prevent do fetch characters that are already in redux
      const fetchedChars = Object.keys(characters.byId)
      const charactersToFetch = episodeCharacters.filter((id) => fetchedChars.indexOf(id) === -1)

      if(charactersToFetch.length === 0) { return } // skip downloading when all fetched

      const response = await API.get(`/character/${charactersToFetch.join(',')}`)
      const data = await response.json()
      dispatch(charactersFetched(data))
    }
    fetchData()
  }, [characters, episodeCharacters, onOpenChange])

  return (
    <Collapse
      title={`Episode ${id}`}
      open={open}
      onChange={onOpen}
      className="episode"
    >
      <ul className="episode__properties">
        <li><strong>ID</strong> <span>{id}</span></li>
        <li><strong>Name</strong> <span>{name}</span></li>
        <li><strong>Air date</strong> <span>{air_date}</span></li>
        <li><strong>Episode</strong> <span>{episode.episode}</span></li>
        <li><strong>Characters</strong></li>
      </ul>
      <div className="episode__characters">
        <CharactersList list={episodeCharacters} />
      </div>
    </Collapse>
  )
}

Episode.propTypes = propTypes
Episode.defaultProps = defaultProps

export default connect(({characters}) => ({characters}))(Episode)
