import React, { useCallback, useState, useEffect } from 'react'

import "./style.scss"

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
        <button className="collapse__button">{isOpen ? 'A' : 'V'}</button>
      </div>
      <div className={`collapse__body ${className}`}>
        { children }
      </div>
    </div>
  )
}

export default Collapse