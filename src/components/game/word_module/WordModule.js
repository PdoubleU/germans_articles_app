import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../../providers/DictionaryProvider';
import { refDER, refDAS, refDIE } from '../../../api/APIconstans';
import DisplayForm from '../DisplayForm';

const StyledQuestionModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuestionModule = ({
  selectHandler,
  selectedRadio,
  isAnswerCorrect,
  noun,
}) => {
  return (
    <StyledQuestionModule>
      <h2>{noun}</h2>
      <DisplayForm
        selectHandler={selectHandler}
        selectedRadio={selectedRadio}
        isAnswerCorrect={isAnswerCorrect}
      ></DisplayForm>
    </StyledQuestionModule>
  );
};

export default QuestionModule;
