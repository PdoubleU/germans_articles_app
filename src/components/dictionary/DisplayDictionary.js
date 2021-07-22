import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';

const DisplayDictionary = () => {
  const ctx = useContext(DictionaryContext);

  useEffect(() => {
    ctx.setLocalStorage();
  }, []);

  const getDictionary = (e) => {
    e.preventDefault();
    ctx.getData();
  };

  return (
    <>
      <StyledButton as="button" onClick={getDictionary}>
        Load your dictionary
      </StyledButton>
    </>
  );
};

export default DisplayDictionary;
