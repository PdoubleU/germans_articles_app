import React from 'react';
import styled from 'styled-components';
import DisplayForm from './DisplayForm';

const StyledQuestionModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > h2 {
    width: 100%;
    text-align: center;
  }
  & > h2.positive {
    color: green;
  }
  & > h2.negative {
    color: red;
  }
`;

const QuestionModule = ({
  selectHandler,
  selectedRadio,
  isAnswerCorrect,
  noun,
}) => {
  return (
    <StyledQuestionModule>
      <h2
        className={
          selectedRadio ? (isAnswerCorrect ? 'positive' : 'negative') : null
        }
      >
        {noun}
      </h2>
      <DisplayForm
        selectHandler={selectHandler}
        selectedRadio={selectedRadio}
        isAnswerCorrect={isAnswerCorrect}
      ></DisplayForm>
    </StyledQuestionModule>
  );
};

export default QuestionModule;
