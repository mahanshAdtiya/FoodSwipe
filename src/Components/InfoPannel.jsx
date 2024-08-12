import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const styles = {
  dialogPaper: {
    backgroundColor: "#293040",
    color: "gray",
  },
  dialogTitle: {
    backgroundColor: "#1e2a36",
    color: "gray",
    textAlign: "center",
  },
  dialogContent: {
    backgroundColor: "#1e2a36",
    color: "gray",
  },
  dialogActions: {
    backgroundColor: "#1e2a36",
  },
  button: {
    color: "#d5b263",
    transition: "background-color 0.3s ease",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
  },
  buttonHover: {
    backgroundColor: "#3c4a60",
    color: "#d5b263",
  },
  snackbarAlert: {
    backgroundColor: "#4caf50",
    color: "white",
    fontWeight: "bold",
  },
};

const InfoPanel = ({
  selectedLetters,
  setSelectedLetters,
  level,
  setLevel,
  actualWords,
  setActualWords,
  gameCompleted,
  setGameCompleted,
  playAgain,
  setPlayAgain,
}) => {
  const [time, setTime] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [gameInitialized, setGameInitialized] = useState(false);
  const [hoverPlayAgain, setHoverPlayAgain] = useState(false);
  const [hoverShare, setHoverShare] = useState(false);
  const [copySelectedLetters, setCopySelectedLetters] = useState([]);
  const timerRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${
      minutes > 0 || hours > 0 ? `${minutes}m ` : ""
    }${seconds}s`;
  };

  useEffect(() => {
    if (!gameInitialized && actualWords.length > 0) {
      setGameInitialized(true);
      setHasStarted(true);
    }
  }, [actualWords, gameInitialized]);

  useEffect(() => {
    if (hasStarted) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [hasStarted]);

  useEffect(() => {
    // Update copySelectedLetters whenever selectedLetters change
    setCopySelectedLetters(selectedLetters);
  }, [selectedLetters]);

  useEffect(() => {
    console.log("Selected letters:", copySelectedLetters);
    const selectedWord = copySelectedLetters
      .map((letterObj) => letterObj.letter)
      .join("");

    if (actualWords.includes(selectedWord)) {
      console.log("Word found:", selectedWord);
      setActualWords((prevWords) =>
        prevWords.filter((word) => word !== selectedWord)
      );
      setCopySelectedLetters([]);
      setOpenSnackbar(true);
    }

    if (gameInitialized && actualWords.length === 0 && !gameCompleted) {
      setGameCompleted(true);
      setOpenDialog(true);
      clearInterval(timerRef.current);
    }
  }, [
    selectedLetters,
    actualWords,
    gameCompleted,
    hasStarted,
    gameInitialized,
    setSelectedLetters,
    setActualWords,
    copySelectedLetters,
  ]);

  const handleCloseDialog = () => {
    setPlayAgain(true);
    setOpenDialog(false);
    setTime(0);
    setHasStarted(false);
    setGameInitialized(false);
    setGameCompleted(false);
    setSelectedLetters([]);
    setCopySelectedLetters([]);
  };

  return (
    <Box className="info-panel" style={styles.infoPanel}>
      <Typography variant="h5" className="selected-letters">
        {selectedLetters
          .map((letterObj) => letterObj.letter.toUpperCase())
          .join("")}
      </Typography>
      <Typography variant="h6" className="time-display">
        Time: <span>{formatTime(time)}</span>
      </Typography>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          style={styles.snackbarAlert}
        >
          Great job! You found a word!
        </Alert>
      </Snackbar>
      {openDialog && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="win-dialog-title"
          PaperProps={{ style: styles.dialogPaper }}
        >
          <DialogTitle id="win-dialog-title" style={styles.dialogTitle}>
            Congratulations!
          </DialogTitle>
          <DialogContent style={styles.dialogContent}>
            <Typography variant="h6">You have completed the game!</Typography>
            <Typography variant="body1">
              Your time: {formatTime(time)}
            </Typography>
          </DialogContent>
          <DialogActions style={styles.dialogActions}>
            <Button
              onMouseEnter={() => setHoverPlayAgain(true)}
              onMouseLeave={() => setHoverPlayAgain(false)}
              onClick={handleCloseDialog}
              style={{
                ...styles.button,
                ...(hoverPlayAgain ? styles.buttonHover : {}),
              }}
            >
              Play Again
            </Button>
            <Button
              onMouseEnter={() => setHoverShare(true)}
              onMouseLeave={() => setHoverShare(false)}
              style={{
                ...styles.button,
                ...(hoverShare ? styles.buttonHover : {}),
              }}
            >
              Share
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default InfoPanel;
