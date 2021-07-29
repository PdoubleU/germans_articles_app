import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';

const DisplayGame = () => {
  const ctx = useContext(DictionaryContext);

  useEffect(() => {
    ctx.setSessionStorage();
  }, []);

  return (
    <>
      <ul>
        {!ctx.localDictionary ? (
          <p>{ctx.currentState}</p>
        ) : (
          ctx.localDictionary.map((item) => (
            <li key={item.id}>{item.nounDE}</li>
          ))
        )}
      </ul>
    </>
  );
};

export default DisplayGame;
