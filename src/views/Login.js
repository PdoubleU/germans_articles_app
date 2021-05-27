import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LoggedUserContext } from '../providers/UserAuthProvider';
import styled from 'styled-components';
import MainView from './MainView';

const Button = styled.button`
  padding: 0.6rem 1.2rem;
`;
function Login() {
  const cxt = useContext(LoggedUserContext);
  console.log(cxt);
  return (
    <>
      {cxt.isLogged ? <MainView></MainView> : <div>need to log in</div>}
      <Button onClick={cxt.logIn}>Log in</Button>
    </>
  );
}

Login.propTypes = {
  props: PropTypes.element,
};

export default Login;
