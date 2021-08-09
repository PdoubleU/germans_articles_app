import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledScorePanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

const ScorePanel = ({ points, accuracy }) => {
  return (
    <StyledScorePanel>
      <p>Points: {points}</p>
      <p>Accuracy: {accuracy} %</p>
    </StyledScorePanel>
  );
};

ScorePanel.prototype = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ScorePanel;
