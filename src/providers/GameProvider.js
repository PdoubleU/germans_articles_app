import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GameContext = React.createContext({
  displayTimer: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  cardsDisplayed: 0,
  switchCard: () => {},
  evaluateAnswer: () => {},
  scorePoints: () => {},
});

const initialState = {
  displayTimer: 30,
  correctAnswers: 0,
  wrongAnswers: 0,
  cardsDisplayed: 0,
  startTimer: () => {},
};

export const GameProvider = ({ children }) => {
  const [displayTimer, setDisplayTimer] = useState(initialState.displayTimer);
  let intervalID = null;

  const startTimer = () => {
    let seconds = 0;
    intervalID = window.setInterval(() => {
      if (seconds === displayTimer) {
        console.log('time out!');
        clearInterval(intervalID);
        setDisplayTimer(initialState.displayTimer);
        return;
      }
      setDisplayTimer((displayTimer) => displayTimer - 1);
      seconds += 1;
    }, 100);
    console.log('interval ID: ', intervalID);
  };

  const switchCard = () => {};

  const evaluateAnswer = (answer) => {
    console.log(answer);
  };

  const scorePoints = () => {};

  return (
    <GameContext.Provider
      value={{
        displayTimer,
        startTimer,
        switchCard,
        evaluateAnswer,
        scorePoints,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
