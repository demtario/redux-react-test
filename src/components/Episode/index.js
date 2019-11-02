import React, { useMemo } from 'react'
import {connect} from 'react-redux'

import API from '../../services/api'
import Collapse from '../Collapse'
import Character from '../Character'

import {charactersFetched} from '../../redux/characters/actions'

import './style.scss'

const getIdFromLink = (link) => {
  const splitted = link.split('/')
  return splitted[splitted.length-1]
}

const Episode = ({episode, open, onOpenChange, dispatch}) => {

  const { id, name, air_date } = episode

  const characters = useMemo(() => (
    episode.characters.map((url) => getIdFromLink(url))
  ), [episode.characters])

  const onOpen = (isOpen) => {
    if(!isOpen) { return }

    const fetchData = async () => {
      const response = await API.get(`/character/${characters.join(',')}`)
      const data = await response.json()
      dispatch(charactersFetched(data))
    }
    fetchData()
    onOpenChange(isOpen)
  }

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
        { characters &&
          characters
            .map((id) => (
              <Character key={id} id={id} />
            ))
        }
      </div>
    </Collapse>
  )
}

export default connect(() => ({}))(Episode)
