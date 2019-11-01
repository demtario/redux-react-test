import React from 'react'

import './style.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <h1 className="header__title">Rick and Morty app</h1>
        <span className="header__credits">Created by Artur Mędrygał</span>
      </div>
    </header>
  )
}

export default Header