import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';

const DisplayGame = () => {
  const ctx = useContext(DictionaryContext);

  useEffect(() => {
    ctx.setLocalStorage();
  }, []);

  const getNouns = (e) => {
    e.preventDefault();
    ctx.getData();
  };

  return (
    <>
      <StyledButton as="button" onClick={getNouns}>
        Play game
      </StyledButton>
    </>
  );
};

export default DisplayGame;
