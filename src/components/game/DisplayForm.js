import React from 'react';
import styled from 'styled-components';
import StyledButton from '../reusables/Button';
import FormField from './form_field/FormField';
import { refDER, refDAS, refDIE } from '../../api/APIconstans';

const DisplayFormStyled = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DisplayForm = ({ selectHandler, selectedRadio }) => {
  return (
    <DisplayFormStyled>
      <FormField
        type="radio"
        label="DER"
        name="answer"
        id="answer_der"
        value={refDER}
        onChange={selectHandler}
        selectedRadio={selectedRadio}
      ></FormField>
      <FormField
        type="radio"
        label="DIE"
        name="answer"
        id="answer_die"
        value={refDIE}
        onChange={selectHandler}
        selectedRadio={selectedRadio}
      ></FormField>
      <FormField
        type="radio"
        label="DAS"
        name="answer"
        id="answer_das"
        value={refDAS}
        onChange={selectHandler}
        selectedRadio={selectedRadio}
      ></FormField>
    </DisplayFormStyled>
  );
};

export default DisplayForm;
