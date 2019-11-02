import React from 'react'
import {connect} from 'react-redux'

import './style.scss'

const Character = ({id, characters}) => {
  const {name, image} = characters.byId[id] || {}

  return (
    <div className="character">
      <img src={image} alt={name} className="character__image"/>
      <div className="character__name">{ name || `[ID: ${id}]` }</div>
    </div>
  )
}

export default connect(({characters}) => ({characters}))(Character)