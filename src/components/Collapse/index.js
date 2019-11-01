import React, { useCallback, useState, useEffect } from 'react'

import "./style.scss"

const Collapse = ({children, open, onChange, title}) => {

  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
    onChange(isOpen)
  }, [isOpen])

  return (
    <div className="collapse">
      <div className="collapse__head">
        { title }
        <button onClick={toggle}>{isOpen ? '-' : '+'}</button>
      </div>
      <div className="collapse__body" style={{display: isOpen ? 'block' : 'none'}}>
        { children }
      </div>
    </div>
  )
}

export default Collapse