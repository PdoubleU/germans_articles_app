import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import { GameContext } from '../../providers/GameProvider';
import StyledButton from '../reusables/Button';

const DisplayGame = () => {
  const dictCTX = useContext(DictionaryContext);
  const gameCTX = useContext(GameContext);

  useEffect(() => {
    dictCTX.setSessionStorage();
  }, []);

  return (
    <>
      <ul>
        {!dictCTX.localDictionary ? (
          <p>{dictCTX.currentState}</p>
        ) : (
          <>
            <p>{gameCTX.displayTimer}</p>
            <StyledButton onClick={gameCTX.startTimer}>Let's play</StyledButton>
          </>
        )}
      </ul>
    </>
  );
};

export default DisplayGame;
