import React from "react";
import EmptyGrid from "./EmptyGrid";
import Rules from "./Rules";

function LandingPage({ setShowGame }) {
  return (
    <div className="landing-container">
      <EmptyGrid />
      <Rules setShowGame={setShowGame} />
    </div>
  );
}

export default LandingPage;
