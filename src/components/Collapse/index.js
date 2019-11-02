import React, { useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import "./style.scss"

const propTypes = {
  /** boolean to control state of collapse from outside */
  open: PropTypes.bool,
  /** function to raport up when state is changed */
  onChange: PropTypes.func,
  /** text to show in collapse head */
  title: PropTypes.string,
  /** class for collapse body */
  className: PropTypes.string,
}
const defaultProps = {
  open: false,
  onChange: () => {},
  title: '',
  className: ''
}

const Collapse = ({children, open, onChange, title, className}) => {

  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
    onChange(!isOpen)
  }, [isOpen, onChange])

  return (
    <div className={`collapse ${isOpen && 'collapse--open'}`}>
      <div className="collapse__head" onClick={toggle}>
        { title }
        <button className="collapse__button">{isOpen ? '-' : '+'}</button>
      </div>
      <div className={`collapse__body ${className}`}>
        { children }
      </div>
    </div>
  )
}

Collapse.propTypes = propTypes
Collapse.defaultProps = defaultProps

export default Collapse