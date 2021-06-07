import './style.css';
import UnauthView from './views/UnauthView';
import AuthView from './views/AuthView';
import LoadingView from './views/LoadingView';
import { UsersContext } from '../src/providers/UserAuthProvider';
import { useContext } from 'react';

function Root() {
  const cxt = useContext(UsersContext);

  if (cxt.loading) {
    return <LoadingView></LoadingView>;
  }
  return !cxt.loading && !cxt.isLogged ? (
    <UnauthView handleClick={cxt.logIn}></UnauthView>
  ) : (
    <AuthView handleClick={cxt.logOut} user={cxt.user}></AuthView>
  );
}

export default Root;
