import React, {useState, useEffect} from 'react'

import {Grid, InfoPannel} from '.'

import {generateGrid} from '../Utils/layoutGenerator';

function Hero() {
  const [level, setLevel] = useState('easy')
  const [gameCompleted, setGameCompleted] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [grid, setGrid] = useState([]);
  const [actualWords, setActualWords] = useState([]);
  
  useEffect(() => { 
    const { grid: generatedGrid, selectedWords } = generateGrid(level); 
    setGrid(generatedGrid);
    setActualWords(selectedWords);
  }, [level,gameCompleted]);
  
  return (
    <div className='hero-conatiner'>
        <div className='wrapper'>
            <Grid gridData={grid} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters}/>
            <InfoPannel level={level} setLevel={setLevel} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters} actualWords={actualWords} setActualWords={setActualWords} gameCompleted={gameCompleted} setGameCompleted={setGameCompleted}/>
        </div>
    </div>
  )
}

export default Hero