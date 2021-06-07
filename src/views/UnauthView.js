import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.6rem 1.2rem;
`;
function UnauthView({ handleClick }) {
  return (
    <>
      <div>need to log in</div>
      <Button onClick={handleClick}>Log in</Button>
    </>
  );
}

UnauthView.propTypes = {
  props: PropTypes.element,
};

export default UnauthView;
