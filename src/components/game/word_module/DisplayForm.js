import React from 'react';
import styled from 'styled-components';
import FormField from '../form_field/FormField';
import { refDER, refDAS, refDIE } from '../../../api/APIconstans';
import { der, die, das } from '../../constans/answerIDs';

const DisplayFormStyled = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 2rem;
  font-size: 1.2rem;
`;

const DisplayForm = ({ selectHandler, selectedRadio, isAnswerCorrect }) => {
  return (
    <DisplayFormStyled>
      <FormField
        type="radio"
        label="DER"
        name="answer"
        id={der}
        value={refDER}
        onChange={selectHandler}
        selectedRadio={selectedRadio}
        isAnswerCorrect={isAnswerCorrect}
      ></FormField>
      <FormField
        type="radio"
        label="DIE"
        name="answer"
        id={die}
        value={refDIE}
        onChange={selectHandler}
        selectedRadio={selectedRadio}
        isAnswerCorrect={isAnswerCorrect}
      ></FormField>
      <FormField
        type="radio"
        label="DAS"
        name="answer"
        id={das}
        value={refDAS}
        onChange={selectHandler}
        selectedRadio={selectedRadio}
        isAnswerCorrect={isAnswerCorrect}
      ></FormField>
    </DisplayFormStyled>
  );
};

export default DisplayForm;
