import React from 'react';

function Grid({ gridData, selectedLetters, setSelectedLetters }) {
  const handleLetterClick = (rowIndex, colIndex) => {
    const existingIndex = selectedLetters.findIndex(
      (selected) => selected.rowIndex === rowIndex && selected.colIndex === colIndex
    );

    if (existingIndex !== -1) {
      setSelectedLetters(selectedLetters.slice(0, existingIndex + 1));
    } else {
      const lastSelected = selectedLetters[selectedLetters.length - 1];
      if (!lastSelected || isAdjacent(lastSelected, { rowIndex, colIndex })) {
        const letter = gridData[rowIndex][colIndex];
        setSelectedLetters((prev) => [...prev, { letter, rowIndex, colIndex }]);
      } else {
        const letter = gridData[rowIndex][colIndex];
        setSelectedLetters([{ letter, rowIndex, colIndex }]);
      }
    }
  };

  const isAdjacent = (lastSelected, current) => {
    const rowDiff = Math.abs(lastSelected.rowIndex - current.rowIndex);
    const colDiff = Math.abs(lastSelected.colIndex - current.colIndex);
    return (rowDiff === 1 && colDiff <= 1) || (colDiff === 1 && rowDiff <= 1);
  };

  const isLetterSelected = (rowIndex, colIndex) => {
    return selectedLetters.some(
      (selected) => selected.rowIndex === rowIndex && selected.colIndex === colIndex
    );
  };

  return (
    <div className="grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`grid-letter ${isLetterSelected(rowIndex, colIndex) ? 'selected' : ''}`}
              onClick={() => handleLetterClick(rowIndex, colIndex)}
            >
              <p>{letter}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
