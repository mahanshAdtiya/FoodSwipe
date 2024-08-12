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
  Select,
  MenuItem,
} from "@mui/material";
import {
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  TelegramShareButton,
  RedditShareButton,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";

const styles = {
  dialogPaper: {
    backgroundColor: "#293040",
    color: "gray",
  },
  dialogTitle: {
    backgroundColor: "#1e2a36",
    color: "#FAF9F6",
    textAlign: "center",
  },
  dialogContent: {
    backgroundColor: "#1e2a36",
    color: "#FAF9F6",
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
  guessedWordsList: {
    marginTop: "10px",
    backgroundColor: "#1e2a36",
    color: "gray",
    borderRadius: "5px",
    padding: "10px",
  },
  listItem: {
    color: "white",
  },
  select: {
    backgroundColor: "#3c4a60",
    color: "#FAF9F6",
    padding: "10px",
    borderRadius: "5px",
    width: "100%",
  },
  selectIcon: {
    color: "#d5b263",
  },
  menuItem: {
    color: "#d5b263",
    backgroundColor: "#1e2a36",
    "&:hover": {
      backgroundColor: "#3c4a60",
    },
  },
  homeButton: {
    backgroundColor: "#3c4a60",
    width: "100px",
    padding: "10px",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  homeButtonHover: {
    backgroundColor: "#405075",
    transform: "scale(1.05)",
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
  setShowGame,
}) => {
  const [time, setTime] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [gameInitialized, setGameInitialized] = useState(false);
  const [hoverHomeButton, setHoverHomeButton] = useState(false); // State for hover effect
  const [hoverPlayAgain, setHoverPlayAgain] = useState(false);
  const [hoverShare, setHoverShare] = useState(false);
  const [copySelectedLetters, setCopySelectedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const [shareMessage, setShareMessage] = useState("Check out this link!");
  const shareUrl = window.location.origin;
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
    setCopySelectedLetters(selectedLetters);
  }, [selectedLetters]);

  useEffect(() => {
    console.log("Selected letters:", copySelectedLetters);
    const selectedWord = copySelectedLetters
      .map((letterObj) => letterObj.letter)
      .join("");

    if (actualWords.includes(selectedWord)) {
      console.log("Word found:", selectedWord);
      setGuessedWords((prevGuessedWords) => [
        ...prevGuessedWords,
        selectedWord,
      ]);
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
    setGuessedWords([]);
  };

  const handleShareClick = () => {
    const message =
      `Hey, Check out this fun game that helps you test your knowledge about food!\n` +
      `It took me ${formatTime(
        time
      )} to complete the game. Let's see how much you can score!\n` +
      `Here's the link: `;
    setShareMessage(message);
    setOpenShareDialog(true);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleClick = () => {
    setShowGame(false);
  };

  return (
    <Box className="info-panel" style={styles.infoPanel}>
      <Typography variant="h5" className="info-itmes selected-letters">
        {selectedLetters
          .map((letterObj) => letterObj.letter.toUpperCase())
          .join("")}
      </Typography>
      <Typography variant="h6" className="info-itmes time-display">
        Time: <span>{formatTime(time)}</span>
      </Typography>

      <Select
        value={level}
        onChange={handleLevelChange}
        style={styles.select}
        classes={{ icon: styles.selectIcon }}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenu-list": {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          },
        }}
      >
        <MenuItem value="easy" style={styles.menuItem}>
          Easy
        </MenuItem>
        <MenuItem value="medium" style={styles.menuItem}>
          Medium
        </MenuItem>
        <MenuItem value="hard" style={styles.menuItem}>
          Hard
        </MenuItem>
      </Select>

      <Typography
        variant="h6"
        className="info-itmes selected-letters guessed-word"
      >
        <span>Guessed Words: </span>
        {guessedWords.map((word, index) => (
          <p key={index}>{word.toUpperCase()}</p>
        ))}
      </Typography>

      <Button
        variant="contained"
        style={{
          ...styles.homeButton,
          ...(hoverHomeButton ? styles.homeButtonHover : {}),
        }}
        onMouseEnter={() => setHoverHomeButton(true)}
        onMouseLeave={() => setHoverHomeButton(false)}
        onClick={handleClick}
      >
        Home
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
          aria-hidden={!openDialog}
          disableEnforceFocus
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
              onClick={handleShareClick}
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
      <Dialog
        open={openShareDialog}
        onClose={() => setOpenShareDialog(false)}
        aria-labelledby="share-dialog-title"
        PaperProps={{ style: styles.dialogPaper }}
      >
        <DialogTitle id="share-dialog-title" style={styles.dialogTitle}>
          Share This Game
        </DialogTitle>
        <DialogContent style={styles.dialogContent}>
          <Typography variant="body1" style={{ marginBottom: "10px" }}>
            {shareMessage}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <WhatsappShareButton url={shareUrl} title={shareMessage}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton url={shareUrl} title={shareMessage}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={shareMessage}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookShareButton url={shareUrl} title={shareMessage}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton url={shareUrl} title={shareMessage}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <RedditShareButton url={shareUrl} title={shareMessage}>
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
        </DialogContent>
        <DialogActions style={styles.dialogActions}>
          <Button
            onClick={() => setOpenShareDialog(false)}
            style={styles.button}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InfoPanel;
