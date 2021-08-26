import React, { useContext, useEffect, useState } from 'react';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';
import StyledScorePanel from './score_panel/ScorePanel';
import QuestionModule from './word_module/QuestionModule';
import { refDER, refDAS, refDIE } from '../../api/APIconstans';
import { der, die, das } from '../constans/answerIDs';

const initialState = {
  correctAnswers: 0,
  wrongAnswers: 0,
  cardsDisplayed: 0,
  indexes: [],
  accuracy: 0,
};

const DisplayGame = () => {
  const dictCTX = useContext(DictionaryContext);

  const [words, setWords] = useState(null);
  const [wordsLength, setWordsLength] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState(initialState.indexes);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);
  const [accuracy, setAccuracy] = useState(initialState.accuracy);

  useEffect(() => {
    dictCTX.setSessionStorage();
  }, []);

  useEffect(() => {
    if (!dictCTX.localDictionary) return;
    loadWords();
  }, [dictCTX]);

  useEffect(() => {
    setAccuracy(Math.round((correctAnswers * 100) / usedIndexes.length || 0.1));
  }, [correctAnswers, usedIndexes]);

  const initiateGame = () => {
    setIsPlayDisabled(true);
    getNextWord();
  };

  const evaluateGameState = (evaluatedAnswer) => {
    if (evaluatedAnswer !== undefined && evaluatedAnswer) {
      setIsAnswerCorrect(true);
      window.setTimeout(() => {
        scorePoint();
        getNextWord();
        setSelectedRadio(null);
        setIsAnswerCorrect(null);
        return;
      }, 2000);
    }

    if (evaluatedAnswer !== undefined && !evaluatedAnswer) {
      if (currentWord.article === refDAS) {
        const elem = document.querySelector(`label[for=${das}]`);
        elem.classList.add('positive');
        window.setTimeout(() => elem.classList.remove('positive'), 2000);
      }
      if (currentWord.article === refDER) {
        const elem = document.querySelector(`label[for=${der}]`);
        elem.classList.add('positive');
        window.setTimeout(() => elem.classList.remove('positive'), 2000);
      }
      if (currentWord.article === refDIE) {
        const elem = document.querySelector(`label[for=${die}]`);
        elem.classList.add('positive');
        window.setTimeout(() => elem.classList.remove('positive'), 2000);
      }
      setIsAnswerCorrect(false);
      window.setTimeout(() => {
        getNextWord();
        setSelectedRadio(null);
        setIsAnswerCorrect(null);
        return;
      }, 2000);
    }

    if (wordsLength === usedIndexes.length) {
      setCurrentWord({ nounDE: 'GAME OVER' });
      setSelectedRadio(null);
      setIsPlayDisabled(false);
      return;
    }
  };

  const loadWords = () => {
    setWords(JSON.parse(JSON.stringify(dictCTX.localDictionary)));
    setWordsLength(dictCTX.localDictionary.length);
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
      <span className="container">
        {!dictCTX.localDictionary ? (
          <p>{dictCTX.currentState}</p>
        ) : (
          <>
            <StyledScorePanel
              points={correctAnswers}
              accuracy={accuracy}
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
              <StyledButton as="button" onClick={initiateGame}>
                Play
              </StyledButton>
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
