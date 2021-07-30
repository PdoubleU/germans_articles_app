import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';

const initialState = {
  timer: 15,
  correctAnswers: 0,
  wrongAnswers: 0,
  cardsDisplayed: 0,
  startTimer: () => {},
};

const DisplayGame = () => {
  const dictCTX = useContext(DictionaryContext);

  const [timer, setTimer] = useState(initialState.timer);
  const [words, setWords] = useState(null);
  const [wordsLength, setWordsLength] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);

  let intervalID = null;
  let usedIndexes = [];

  useEffect(() => {
    dictCTX.setSessionStorage();
  }, []);

  const loadWords = () => {
    setWords(JSON.parse(JSON.stringify(dictCTX.localDictionary)));
    setWordsLength(dictCTX.localDictionary.length);
  };

  const startTimer = () => {
    let index = getNewCardIndex(0, wordsLength); // get new, unique index, to display a next word
    // below variable stores the value of counted seconds, it is used to restart timer
    // bcause setInterval uses its own scope, 'seconds' is helper here, to store the current counted seconds:
    let seconds = 0;
    setCurrentWord(words[index]); // load first word in the game

    intervalID = window.setInterval(() => {
      // interval works, and checks if counted seconds are equal to timer value - true means that user has no more time and code has to restart countdown
      if (seconds === timer) {
        setTimer(initialState.timer); // restart timer
        seconds = 0;
        index = getNewCardIndex(0, wordsLength);
        if (!index) {
          // guard pattern
          clearInterval(intervalID);
          return;
        }
        setCurrentWord(words[index]);
      }
      setTimer((timer) => timer - 1);
      seconds += 1;
    }, 10);
  };

  const startGame = () => {
    // start game runs interval in which all logic happens:
    startTimer();
  };

  const getNewCardIndex = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (usedIndexes.length >= wordsLength) {
      return; // guard pattern, can be merged later with other guard pattern for index
    }
    let randomIndex = () => {
      let randomNumebr = () => Math.floor(Math.random() * (max - min)) + min;
      let index = randomNumebr();
      if (usedIndexes.length && usedIndexes.some((elem) => elem === index)) {
        return randomIndex();
      }
      usedIndexes.push(index);
      return index;
    };
    return randomIndex();
  };

  const evaluateAnswer = (answer) => {
    console.log(answer);
  };

  const scorePoints = () => {};

  return (
    <>
      <ul>
        {!dictCTX.localDictionary ? (
          <p>{dictCTX.currentState}</p>
        ) : (
          <>
            <p>{timer}</p>
            <StyledButton onClick={startTimer}>Let's play</StyledButton>
            <StyledButton onClick={loadWords}>Load words</StyledButton>
            <StyledButton onClick={startGame}>Play</StyledButton>
            <div>
              <h6>Current word</h6>
              {currentWord ? (
                <div>
                  <p>{currentWord.nounDE}</p>
                  <StyledButton onClick={evaluateAnswer}>DER</StyledButton>
                  <StyledButton onClick={evaluateAnswer}>DIE</StyledButton>
                  <StyledButton onClick={evaluateAnswer}>DAS</StyledButton>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </>
        )}
      </ul>
    </>
  );
};

export default DisplayGame;
