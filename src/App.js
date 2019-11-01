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
      <Header />
      <main className="container">
        <AllEpisodes />
      </main>
    </div>
  );
}

export default App;
