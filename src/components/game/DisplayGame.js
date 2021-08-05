import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';
import { refDER, refDAS, refDIE } from '../../api/APIconstans';
import DisplayForm from './DisplayForm';

const initialState = {
  timer: 15,
  correctAnswers: 0,
  wrongAnswers: 0,
  cardsDisplayed: 0,
  indexes: [],
};

const DisplayGame = () => {
  const dictCTX = useContext(DictionaryContext);

  const [timer, setTimer] = useState(initialState.timer);
  const [words, setWords] = useState(null);
  const [wordsLength, setWordsLength] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timerID, setTimerID] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState(initialState.indexes);
  const [selectedRadio, setSelectedRadio] = useState(null);

  useEffect(() => {
    dictCTX.setSessionStorage();
  }, []);

  useEffect(() => {
    if (!dictCTX.localDictionary) return;
    loadWords();
  }, [dictCTX]);

  useEffect(() => {
    evaluateGameState();
  }, [timer]);

  const initiateGame = () => {
    getNextWord();
    startTimer();
  };

  const evaluateGameState = (evaluatedAnswer) => {
    if (evaluatedAnswer !== undefined && evaluatedAnswer) {
      scorePoint();
      clearInterval(timerID);
      setTimer(initialState.timer);
      getNextWord();
      if (wordsLength !== usedIndexes.length) startTimer();
      setSelectedRadio(null);
      return;
    }

    if (evaluatedAnswer !== undefined && !evaluatedAnswer) {
      clearInterval(timerID);
      setTimer(initialState.timer);
      getNextWord();
      if (wordsLength !== usedIndexes.length) startTimer();
      setSelectedRadio(null);
      return;
    }

    if (timer > 0) return;

    if (timer === 0 && wordsLength === usedIndexes.length) {
      clearInterval(timerID);
      setTimer(initialState.timer);
      setCurrentWord({ nounDE: 'Your score: ' });
      setSelectedRadio(null);
      return;
    }

    if (timer === 0) {
      clearInterval(timerID);
      setTimer(initialState.timer);
      getNextWord();
      startTimer();
      setSelectedRadio(null);
      return;
    }
  };

  const loadWords = () => {
    setWords(JSON.parse(JSON.stringify(dictCTX.localDictionary)));
    setWordsLength(dictCTX.localDictionary.length);
  };

  const startTimer = () => {
    let interval = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return setTimerID(interval);
  };

  const getNextWord = () => {
    let index = getNewIndex(0, wordsLength);
    setCurrentWord(words[index]);
  };

  const getNewIndex = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (usedIndexes.length >= wordsLength) {
      return; // guard pattern, can be merged later with other guard pattern for index
    }
    let randomIndex = () => {
      let randomNumber = () => Math.floor(Math.random() * (max - min)) + min;
      let index = randomNumber();
      if (usedIndexes.length && usedIndexes.some((elem) => elem === index)) {
        return randomIndex();
      }
      setUsedIndexes((usedIndexes) => usedIndexes.concat(index));
      return index;
    };
    return randomIndex();
  };

  const evaluateAnswer = (answer) => {
    setSelectedRadio(answer.target.id);
    let evaluatedAnswer = answer.target.value === currentWord.article;
    evaluateGameState(evaluatedAnswer);
  };

  const scorePoint = () => {
    setCorrectAnswers((correctAnswers) => correctAnswers + 1);
  };

  return (
    <>
      <ul>
        {!dictCTX.localDictionary ? (
          <p>{dictCTX.currentState}</p>
        ) : (
          <>
            <StyledButton onClick={initiateGame}>Play</StyledButton>
            <p>Time: {timer}</p>
            <div>
              <p>Points: {correctAnswers}</p>
              {currentWord ? (
                <div>
                  <p>{currentWord.nounDE}</p>
                  <DisplayForm
                    selectHandler={evaluateAnswer}
                    selectedRadio={selectedRadio}
                  />
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
