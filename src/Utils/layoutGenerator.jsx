import { words as dictionary } from "../data";

const dr = [0, -1, 0, 1, -1, -1, 1, 1];
const dc = [-1, 0, 1, 0, -1, 1, -1, 1];

function generateRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

function createEmptyGrid(gridSize) {
  return Array.from({ length: gridSize }, () => Array(gridSize).fill("-"));
}

function isValidPlacement(r, c, grid) {
  return (
    r >= 0 && r < grid.length && c >= 0 && c < grid.length && grid[r][c] === "-"
  );
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function selectWords(level) {
  let numWords, maxWordLength;
  switch (level.toLowerCase()) {
    case "hard":
      numWords = 3;
      maxWordLength = 12;
      break;
    case "medium":
      numWords = 2;
      maxWordLength = 8;
      break;
    case "easy":
    default:
      numWords = 1;
      maxWordLength = 5;
      break;
  }

  const shuffledDictionary = shuffleArray(dictionary);
  const filteredWords = shuffledDictionary.filter(
    (wordObj) => wordObj.word.length <= maxWordLength
  );
  return filteredWords.slice(0, numWords).map((wordObj) => wordObj.word);
}

function dfs(r, c, word, idx, grid, gridSize) {
  if (idx === word.length) return true;

  if (!isValidPlacement(r, c, grid, gridSize)) return false;

  grid[r][c] = word[idx];
  console.log(`-> row: ${r} col: ${c} letter: ${word[idx]}`);

  const directions = shuffleArray(
    Array.from({ length: dr.length }, (_, i) => i)
  );

  for (let j of directions) {
    const newR = r + dr[j];
    const newC = c + dc[j];

    if (isValidPlacement(newR, newC, grid, gridSize)) {
      if (dfs(newR, newC, word, idx + 1, grid)) {
        return true;
      }
    }
  }

  grid[r][c] = "-";
  return false;
}

function placeWordsOnGrid(words, grid, gridSize) {
  for (let word of words) {
    console.log("Word:", word);
    let wordPlaced = false;
    let attempts = 0;

    while (!wordPlaced && attempts < 50) {
      const r = generateRandomNumber(gridSize);
      const c = generateRandomNumber(gridSize);
      if (grid[r][c] === "-") {
        wordPlaced = dfs(r, c, word, 0, grid, gridSize);
      }
      attempts++;
    }

    if (!wordPlaced) {
      console.log(`Failed to place word: ${word}`);
    }
  }
}

function fillEmptySpaces(grid, gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === "-") {
        grid[i][j] = String.fromCharCode(97 + generateRandomNumber(26));
      }
    }
  }
}

export function generateGrid(level = "easy") {
  let gridSize;
  switch (level.toLowerCase()) {
    case "hard":
      gridSize = 10;
      break;
    case "medium":
      gridSize = 8;
      break;
    case "easy":
    default:
      gridSize = 6;
      break;
  }
  const grid = createEmptyGrid(gridSize);
  console.log(grid);
  const selectedWords = selectWords(level);
  console.log("Actual words:", selectedWords);
  placeWordsOnGrid(selectedWords, grid, gridSize);
  fillEmptySpaces(grid, gridSize);
  return { grid, selectedWords };
}

export default generateGrid();
