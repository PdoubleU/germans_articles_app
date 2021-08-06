import React, { useContext, useEffect, useState } from 'react';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';
import StyledScorePanel from './score_panel/ScorePanel';
import QuestionModule from './word_module/WordModule';

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
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [timerID, setTimerID] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState(initialState.indexes);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);

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
    setIsPlayDisabled(true);
    getNextWord();
    startTimer();
  };

  const evaluateGameState = (evaluatedAnswer) => {
    if (evaluatedAnswer !== undefined && evaluatedAnswer) {
      setIsAnswerCorrect(true);
      window.setTimeout(() => {
        scorePoint();
        clearInterval(timerID);
        setTimer(initialState.timer);
        getNextWord();
        if (wordsLength !== usedIndexes.length) startTimer();
        setSelectedRadio(null);
        setIsAnswerCorrect(null);
        return;
      }, 2000);
    }

    if (evaluatedAnswer !== undefined && !evaluatedAnswer) {
      setIsAnswerCorrect(false);
      window.setTimeout(() => {
        clearInterval(timerID);
        setTimer(initialState.timer);
        getNextWord();
        if (wordsLength !== usedIndexes.length) startTimer();
        setSelectedRadio(null);
        setIsAnswerCorrect(null);
        return;
      }, 2000);
    }

    if (timer > 0) return;

    if (timer === 0 && wordsLength === usedIndexes.length) {
      clearInterval(timerID);
      setTimer(initialState.timer);
      setCurrentWord({ nounDE: 'Your score: ' });
      setSelectedRadio(null);
      setIsPlayDisabled(false);
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
      <span>
        {!dictCTX.localDictionary ? (
          <p>{dictCTX.currentState}</p>
        ) : (
          <>
            <StyledScorePanel
              points={correctAnswers}
              timer={timer}
            ></StyledScorePanel>
            {currentWord ? (
              <QuestionModule
                selectHandler={evaluateAnswer}
                selectedRadio={selectedRadio}
                isAnswerCorrect={isAnswerCorrect}
                noun={currentWord.nounDE}
              />
            ) : (
              <div></div>
            )}
            {!isPlayDisabled ? (
              <StyledButton onClick={initiateGame}>Play</StyledButton>
            ) : (
              <div></div>
            )}
          </>
        )}
      </span>
    </>
  );
};

export default DisplayGame;
