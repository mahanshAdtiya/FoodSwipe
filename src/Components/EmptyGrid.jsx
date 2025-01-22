import React from "react";

function EmptyGrid() {
  const rows = 10;
  const columns = 10;
  const grid = Array.from({ length: rows }, () => Array(columns).fill(" "));

  return (
    <div className="grid">
      {grid.map((row, rIdx) => (
        <div key={rIdx} className="grid-row">
          {row.map((cell, cIdx) => (
            <div key={cIdx} className="grid-letter">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default EmptyGrid;
