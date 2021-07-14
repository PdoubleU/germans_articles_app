import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../reusables/Button';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import { FormField } from './form_field/FormField';

const AddNounForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AddNounToDB() {
  const ctx = useContext(DictionaryContext);
  const word = useRef({
    nounDE: '',
    article: '',
    nounPL: '',
  });

  const saveWord = (e) => {
    console.log(word.current);
    e.preventDefault();
    ctx.addWord(word.current);
  };

  const handleWordChange = (e) => {
    console.log(e.target.value);
    word.current = { ...word.current, [e.target.name]: e.target.value };
  };

  return (
    <AddNounForm className="App">
      <FormField
        label="Your word"
        name="nounDE"
        id="nounDE"
        onChangeHandler={handleWordChange}
      ></FormField>
      <FormField
        label="Article"
        name="article"
        id="article"
        onChangeHandler={handleWordChange}
      ></FormField>
      <FormField
        label="Meaning"
        name="nounPL"
        id="nounPL"
        onChangeHandler={handleWordChange}
      ></FormField>
      <StyledButton handleClick={saveWord} description="Add" />
    </AddNounForm>
  );
}

export default AddNounToDB;
