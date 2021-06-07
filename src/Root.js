import './style.css';
import UnauthView from './views/UnauthView';
import AuthView from './views/AuthView';
import LoadingView from './views/LoadingView';
import { UsersContext } from '../src/providers/UserAuthProvider';
import styled from 'styled-components';
import { useContext } from 'react';

const Wrapper = styled.div`
  background-color: #bada55;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Root() {
  const cxt = useContext(UsersContext);

  return (
    <Wrapper>
      <h2>this is root</h2>
      {cxt.loading ? <LoadingView></LoadingView> : null}
      {!cxt.loading && !cxt.isLogged ? (
        <UnauthView handleClick={cxt.logIn}></UnauthView>
      ) : (
        <AuthView handleClick={cxt.logOut} user={cxt.user}></AuthView>
      )}
    </Wrapper>
  );
}

export default Root;
