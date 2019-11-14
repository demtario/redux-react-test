import React from "react";

import Header from './components/Header'
import AllEpisodes from './components/AllEpisodes'

import "./App.scss";

/**
 * The App
 */
const App = () => {
  return (
    <div>
      <Header
        title="Rick and Morty app"
        subtitle="Created by Artur Mędrygał"
      />
      <div className="container">
        <AllEpisodes />
      </div>
    </div>
  );
}

export default App;
