import React from 'react';
import StyledButton from '../components/reusables/Button';
import { UsersContext } from '../providers/UserAuthProvider';
import { useContext } from 'react';

function AuthView() {
  const cxt = useContext(UsersContext);

  return (
    <div>
      <h2>{cxt.user} is logged in</h2>
    </div>
  );
}

export default AuthView;
