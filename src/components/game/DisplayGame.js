import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';
import { refDER, refDAS, refDIE } from '../../api/APIconstans';

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
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  let usedIndexes = [];

  useEffect(() => {
    dictCTX.setSessionStorage();
  }, []);

  useEffect(() => {
    if (!dictCTX.localDictionary) return;
    loadWords();
  }, [dictCTX]);

  const loadWords = () => {
    setWords(JSON.parse(JSON.stringify(dictCTX.localDictionary)));
    setWordsLength(dictCTX.localDictionary.length);
  };

  const startTimer = () => {
    let seconds = 0;
    let index = getNewCardIndex(0, wordsLength); // get new, unique index, to display a next word
    // below variable stores the value of counted seconds, it is used to restart timer
    // bcause setInterval uses its own scope, 'seconds' is helper here, to store the current counted seconds:
    setCurrentWord(words[index]); // load first word in the game

    let interval = window.setInterval(() => {
      // interval works, and checks if counted seconds are equal to timer value - true means that user has no more time and code has to restart countdown
      if (seconds === timer) {
        setTimer(initialState.timer); // restart timer
        seconds = 0;
        index = getNewCardIndex(0, wordsLength);
        if (!index && index !== 0) {
          // guard pattern
          clearInterval(intervalID);
          return;
        }
        setCurrentWord(words[index]);
      }
      setTimer((timer) => timer - 1);
      seconds += 1;
    }, 1000);

    setIntervalID(interval);
  };

  const startGame = () => {
    // start game runs interval in which all logic happens:
    startTimer();
    console.log(intervalID);
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
    if (answer.target.value === currentWord.article) {
      scorePoint();
      console.log(intervalID);
      clearInterval(intervalID);
      setTimer(initialState.timer);
      startTimer();
    }
  };

  const scorePoint = () => {
    console.log('POINT!');
    setCorrectAnswers((correctAnswers) => correctAnswers + 1);
  };

  return (
    <>
      <ul>
        {!dictCTX.localDictionary ? (
          <p>{dictCTX.currentState}</p>
        ) : (
          <>
            <StyledButton onClick={startGame}>Play</StyledButton>
            <p>Time: {timer}</p>
            <div>
              <p>Points: {correctAnswers}</p>
              {currentWord ? (
                <form>
                  <p>{currentWord.nounDE}</p>
                  <input
                    type="radio"
                    name="answer"
                    value={refDER}
                    onChange={evaluateAnswer}
                  />
                  <label>DER</label>
                  <input
                    type="radio"
                    name="answer"
                    value={refDIE}
                    onChange={evaluateAnswer}
                  />
                  <label>DIE</label>
                  <input
                    type="radio"
                    name="answer"
                    value={refDAS}
                    onChange={evaluateAnswer}
                  />
                  <label>DAS</label>
                </form>
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
