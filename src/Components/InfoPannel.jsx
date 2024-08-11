import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const InfoPanel = ({ selectedLetters, setSelectedLetters, level, setLevel, actualWords, setActualWords, gameCompleted, setGameCompleted}) => {
  const [time, setTime] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); 
  const timerRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    return `${hours > 0 ? `${hours}h ` : ""}${minutes > 0 || hours > 0 ? `${minutes}m ` : ""}${seconds}s`;
  };

  useEffect(() => {
    if (actualWords.length !== 0) {
      setHasStarted(true); 
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [actualWords]);

  useEffect(() => {
    if (!hasStarted) return; 

    const selectedWord = selectedLetters.map(letterObj => letterObj.letter.toUpperCase()).join('');
    const normalizedActualWords = actualWords.map(word => word.toUpperCase());
  
    if (normalizedActualWords.includes(selectedWord)) {
      setActualWords(actualWords.filter(word => word.toUpperCase() !== selectedWord));
      setSelectedLetters([]); 
      setOpenSnackbar(true); 
    }
  
    if (actualWords.length === 0 && !gameCompleted) {
      setGameCompleted(true);
      setOpenDialog(true); 
    }
  }, [selectedLetters, actualWords, setActualWords, setSelectedLetters, hasStarted, gameCompleted]);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box className="info-panel">
      <Typography variant="h5" className="selected-letters">
        {selectedLetters.map(letterObj => letterObj.letter.toUpperCase()).join('')}
      </Typography>
      <Typography variant="h6" className="time-display">
        Time: <span>{formatTime(time)}</span>
      </Typography>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Great job! You found a word!
        </Alert>
      </Snackbar>
      {openDialog && 
        (<Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="win-dialog-title"
        >
          <DialogTitle id="win-dialog-title">Congratulations!</DialogTitle>
          <DialogContent>
            <Typography variant="h6">You have completed the game!</Typography>
            <Typography variant="body1">Your time: {formatTime(time)}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Close</Button>
          </DialogActions>
        </Dialog>)}
    </Box>
  );
};

export default InfoPanel;
