import React from 'react';
import StyledButton from '../components/reusables/Button';
import { UsersContext } from '../providers/UserAuthProvider';
import { useContext } from 'react';

const UnauthView = () => {
  const cxt = useContext(UsersContext);

  return (
    <>
      <div>Please log in</div>
      <StyledButton onClick={cxt.logIn}>Log in</StyledButton>
    </>
  );
};

export default UnauthView;
