import React from 'react'
import PropTypes from 'prop-types'

import Character from '../Character'

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
}
const defaultProps = {
  list: []
}

const CharactersList = React.memo(({list}) => (
  list.map((id) => (
    <Character key={id} id={id} />
  ))
))

CharactersList.propTypes = propTypes
CharactersList.defaultProps = defaultProps

export default CharactersList