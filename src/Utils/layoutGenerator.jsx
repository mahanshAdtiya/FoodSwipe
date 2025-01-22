import { words as dictionary } from "../data";

// Directions: [up, down, left, right, up-left, up-right, down-left, down-right]
const dr = [-1, 1, 0, 0, -1, -1, 1, 1]; // up, down, left, right, up-left, up-right, down-left, down-right
const dc = [0, 0, -1, 1, -1, 1, -1, 1]; // up, down, left, right, up-left, up-right, down-left, down-right

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

// Modify DFS function to only check one direction (but allow all 8 directions)
function dfs(r, c, word, idx, grid, gridSize, direction) {
  if (idx === word.length) return true; // Successfully placed the word

  if (!isValidPlacement(r, c, grid)) return false; // Out of bounds or occupied space

  grid[r][c] = word[idx]; // Place the current letter
  console.log(`-> row: ${r} col: ${c} letter: ${word[idx]}`);

  // Move to the next cell in the chosen direction
  const newR = r + dr[direction];
  const newC = c + dc[direction];

  // Continue placing the word if valid
  if (isValidPlacement(newR, newC, grid)) {
    if (dfs(newR, newC, word, idx + 1, grid, gridSize, direction)) {
      return true; // Successfully placed the word
    }
  }

  grid[r][c] = "-"; // Backtrack if placement fails
  return false;
}

function placeWordsOnGrid(words, grid, gridSize) {
  for (let word of words) {
    console.log("Word:", word);
    let wordPlaced = false;
    let attempts = 0;

    while (!wordPlaced && attempts < 500) {
      const r = generateRandomNumber(gridSize);
      const c = generateRandomNumber(gridSize);

      // Randomly select one of the 8 directions (0-7)
      const direction = generateRandomNumber(8); // 0 to 7 for up, down, left, right, diagonals
      console.log(`Direction: ${direction}`);

      if (grid[r][c] === "-") {
        console.log(`Inital Row: ${r}, Inital Column: ${c}`);
        wordPlaced = dfs(r, c, word, 0, grid, gridSize, direction);
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
        grid[i][j] = String.fromCharCode(97 + generateRandomNumber(26)); // Fill with random letters
      }
    }
  }
}

export function generateGrid(level = "easy") {
  let gridSize;
  switch (level.toLowerCase()) {
    case "hard":
      gridSize = 15;
      break;
    case "medium":
      gridSize = 10;
      break;
    case "easy":
    default:
      gridSize = 8;
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
