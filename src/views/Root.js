import React from 'react';
import UnauthView from './UnauthView';
import AuthView from './AuthView';
import LoadingView from './LoadingView';
import { UsersContext } from '../providers/UserAuthProvider';
import { useContext } from 'react';

const Root = () => {
  const cxt = useContext(UsersContext);

  if (cxt.loading) return <LoadingView />;
  return !cxt.loading && !cxt.isLogged ? <UnauthView /> : <AuthView />;
};

export default Root;
