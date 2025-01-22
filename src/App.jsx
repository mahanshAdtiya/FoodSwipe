import React from "react";
import { useState } from "react";

import { NavBar, Hero, LandingPage } from "./Components";

import "./sass/base.scss";

function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="main-wrapper">
      <NavBar />
      {showGame ? (
        <Hero setShowGame={setShowGame} />
      ) : (
        <LandingPage setShowGame={setShowGame} />
      )}
    </div>
  );
}

export default App;
