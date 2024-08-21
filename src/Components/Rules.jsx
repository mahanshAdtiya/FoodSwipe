import React from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";

function Rules({ setShowGame }) {
  const handleClick = () => {
    setShowGame(true);
  };

  return (
    <Box className="rules-container">
      <h1 className="rules-title">Rules</h1>
      <ul className="rules-list">
        <li>
          <strong>Objective:</strong> The goal of the game is to clear words
          from the grid by selecting adjacent letters to form valid words.
        </li>
        <li>
          <strong>Selecting Letters:</strong> You can select letters by clicking
          on them individually. The letters can be connected horizontally,
          vertically, or diagonally to form a word.
        </li>
        <li>
          <strong>Winning:</strong> The game is won by clearing all the words
          from the grid.
        </li>
      </ul>

      <Button
        variant="contained"
        className="rules-button"
        onClick={handleClick}
      >
        Start Game
      </Button>
    </Box>
  );
}

export default Rules;
