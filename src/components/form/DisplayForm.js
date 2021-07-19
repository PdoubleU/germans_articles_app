import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../reusables/Button';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import FormField from './form_field/FormField';

const DisplayFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const initialRef = {
  nounDE: '',
  article: '',
  nounPL: '',
};

const DisplayForm = () => {
  const ctx = useContext(DictionaryContext);
  const currentState = ctx.currentState;
  const inputRef = useRef(initialRef);
  const formRef = useRef(null);
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current && focusRef.current.focus();
  }, []);

  const saveWord = (e) => {
    e.preventDefault();
    ctx.addData(inputRef.current);
    formRef.current.reset();
  };

  const handleWordChange = (e) => {
    inputRef.current = { ...inputRef.current, [e.target.name]: e.target.value };
  };

  return (
    <DisplayFormStyled onSubmit={saveWord} ref={formRef}>
      <p>{currentState}</p>
      <FormField
        label="Your word"
        name="nounDE"
        id="nounDE"
        value={inputRef.nounDE}
        onChange={handleWordChange}
        placeholder="ex. Geste, -n"
        ref={focusRef}
      ></FormField>
      <FormField
        label="Article"
        name="article"
        id="article"
        value={inputRef.article}
        onChange={handleWordChange}
        placeholder="ex. die"
      ></FormField>
      <FormField
        label="Meaning"
        name="nounPL"
        id="nounPL"
        value={inputRef.nounPL}
        onChange={handleWordChange}
        placeholder="ex. gest"
      ></FormField>
      <StyledButton type="submit">Add</StyledButton>
    </DisplayFormStyled>
  );
};

export default DisplayForm;
