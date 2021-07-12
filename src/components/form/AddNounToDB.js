import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../reusables/Button';
import { DictionaryContext } from '../../providers/DictionaryProvider';

const AddNounForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AddNounToDB() {
  const ctx = useContext(DictionaryContext);
  const word = useRef({
    noun: '',
    article: '',
  });

  const saveWord = (e) => {
    e.preventDefault();
    ctx.addData(word.current);
  };

  const handleWordChange = (e) => {
    word.current = { ...word.current, [e.target.name]: e.target.value };
  };

  return (
    <AddNounForm className="App">
      <input
        type="text"
        name="noun"
        placeholder="Your noun"
        value={word.noun}
        onChange={handleWordChange}
      />
      <input
        type="text"
        name="article"
        placeholder="Article"
        value={word.article}
        onChange={handleWordChange}
      />
      <StyledButton handleClick={saveWord} description="Add" />
    </AddNounForm>
  );
}

export default AddNounToDB;
