import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../../reusables/Button';
import { DictionaryContext } from '../../../providers/DictionaryProvider';
import FormField from './FormField';

const DisplaySearchStyled = styled.form`
  display: flex;
  position: fixed;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 720px) {
    justify-content: center;
  }
  top: 4rem;
  left: 0;
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
    <DisplaySearchStyled onSubmit={saveWord} ref={formRef}>
      <FormField
        label=""
        name="search_bar"
        id="search_bar"
        value={inputRef.nounDE}
        onChange={handleWordChange}
        placeholder="search..."
      ></FormField>
      <StyledButton
        as="button"
        type="reset"
        onClick={ctx.resetDictionary}
        width={'fixed'}
        radius={'rounded'}
      >
        &#128269;
      </StyledButton>
    </DisplaySearchStyled>
  );
};

export default SearchBar;
