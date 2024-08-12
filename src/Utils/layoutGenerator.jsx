import { words as dictionary } from "../data";

const rows = 10;
const columns = 10;

const dr = [0, -1, 0, 1, -1, -1, 1, 1];
const dc = [-1, 0, 1, 0, -1, 1, -1, 1];

function generateRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

function createEmptyGrid() {
  return Array.from({ length: rows }, () => Array(columns).fill("-"));
}

function isValidPlacement(r, c, grid) {
  return r >= 0 && r < rows && c >= 0 && c < columns && grid[r][c] === "-";
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function selectWords(level) {
  let numWords;
  switch (level.toLowerCase()) {
    case "hard":
      numWords = 7;
      break;
    case "medium":
      numWords = 5;
      break;
    case "easy":
    default:
      numWords = 1;
      break;
  }

  const shuffledDictionary = shuffleArray(dictionary);
  return shuffledDictionary.slice(0, numWords).map((wordObj) => wordObj.word);
}

function dfs(r, c, word, idx, grid) {
  if (idx === word.length) return true;

  if (!isValidPlacement(r, c, grid)) return false;

  grid[r][c] = word[idx];
  console.log(`-> row: ${r} col: ${c} letter: ${word[idx]}`);

  const directions = shuffleArray(
    Array.from({ length: dr.length }, (_, i) => i)
  );

  for (let j of directions) {
    const newR = r + dr[j];
    const newC = c + dc[j];

    if (isValidPlacement(newR, newC, grid)) {
      if (dfs(newR, newC, word, idx + 1, grid)) {
        return true;
      }
    }
  }

  grid[r][c] = "-";
  return false;
}

function placeWordsOnGrid(words, grid) {
  for (let word of words) {
    console.log("Word:", word);
    let wordPlaced = false;
    let attempts = 0;

    while (!wordPlaced && attempts < 50) {
      const r = generateRandomNumber(rows);
      const c = generateRandomNumber(columns);
      if (grid[r][c] === "-") {
        wordPlaced = dfs(r, c, word, 0, grid);
      }
      attempts++;
    }

    if (!wordPlaced) {
      console.log(`Failed to place word: ${word}`);
    }
  }
}

function fillEmptySpaces(grid) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "-") {
        grid[i][j] = String.fromCharCode(97 + generateRandomNumber(26));
      }
    }
  }
}

export function generateGrid(level = "easy") {
  const grid = createEmptyGrid();
  const selectedWords = selectWords(level);
  placeWordsOnGrid(selectedWords, grid);
  fillEmptySpaces(grid);
  return { grid, selectedWords };
}

export default generateGrid();
