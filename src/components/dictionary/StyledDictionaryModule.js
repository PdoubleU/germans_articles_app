import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DictionaryModule = styled.span`
  width: 100vw;
  @media (min-width: 720px) {
    width: 60vw;
  }
  z-index: 0;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 5rem 1rem 3rem;
`;

const StyledDictionaryModule = ({ children }) => {
  return <DictionaryModule>{children}</DictionaryModule>;
};

StyledDictionaryModule.prototype = {
  children: PropTypes.object.isRequired,
};

export default StyledDictionaryModule;
