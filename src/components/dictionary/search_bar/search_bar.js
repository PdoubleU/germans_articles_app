import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../../reusables/Button';
import { DictionaryContext } from '../../../providers/DictionaryProvider';
import FormField from './FormField';

const DisplaySearchStyled = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const initialRef = {
  search_bar: '',
};

const SearchBar = () => {
  const ctx = useContext(DictionaryContext);
  const inputRef = useRef(initialRef);
  const formRef = useRef(null);

  const saveWord = (e) => {
    e.preventDefault();
    ctx.addData(inputRef.current);
    formRef.current.reset();
  };

  const handleWordChange = (e) => {
    inputRef.current = e.target.value;
    ctx.filterList(inputRef.current);
  };

  return (
    <DisplaySearchStyled
      onSubmit={saveWord}
      ref={formRef}
      className="search_bar"
    >
      <FormField
        label="?"
        name="search_bar"
        id="search_bar"
        value={inputRef.nounDE}
        onChange={handleWordChange}
        placeholder="search..."
      ></FormField>
      <StyledButton as="button" type="reset" onClick={ctx.resetDictionary}>
        X
      </StyledButton>
    </DisplaySearchStyled>
  );
};

export default SearchBar;
