import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import './style.scss'

const propTypes = {
  /** ID of the character to show */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
const defaultProps = {
  id: 0
}

const Character = ({id, characters}) => {
  const {name, image} = characters.byId[id] || {}

  return (
    <div className={`character ${characters.error && 'character--error'}`}>
      <img src={image} alt={name} className="character__image"/>
      <div className="character__name">{ name || `[ID: ${id}]` }</div>
    </div>
  )
}

Character.propTypes = propTypes
Character.defaultProps = defaultProps

export default connect(({characters}) => ({characters}))(Character)