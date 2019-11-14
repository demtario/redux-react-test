import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const propTypes = {
  /** Main text of the header */
  title: PropTypes.string,
  /** text under the title */
  subtitle: PropTypes.string
}
const defaultProps = {
  title: '',
  subtitle: ''
}

const Header = ({title, subtitle}) => {
  return (
    <header className="header">
      <div className="header__body">
        <h1 className="header__title">{title}</h1>
        <span className="header__credits">{subtitle}</span>
      </div>
    </header>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header