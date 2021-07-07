import React from 'react';
import StyledButton from '../components/reusables/Button';
import { UsersContext } from '../providers/UserAuthProvider';
import { useContext } from 'react';

function UnauthView() {
  const cxt = useContext(UsersContext);

  return (
    <>
      <div>Please log in</div>
      <StyledButton handleClick={cxt.logIn} description="Log in" />
    </>
  );
}

export default UnauthView;
