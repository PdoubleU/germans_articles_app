import React from 'react';
import PropTypes from 'prop-types';
import { refDER, refDAS } from '../../../api/APIconstans';
import styled from 'styled-components';

const StyledWordCard = styled.span`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.wordCardBackground};
  color: ${({ theme }) => theme.wordCardText};
`;

const WordCard = ({ item }) => {
  let { nounDE, article, nounPL } = item;
  article =
    refDER === article
      ? 'Der'
      : false || refDAS === article
      ? 'Das'
      : false || 'Die';

  return (
    <StyledWordCard>
      <p>{article}</p>
      <p>{nounDE}</p>
      <p>{nounPL}</p>
    </StyledWordCard>
  );
};

WordCard.prototype = {
  item: PropTypes.object.isRequired,
};

export default WordCard;
