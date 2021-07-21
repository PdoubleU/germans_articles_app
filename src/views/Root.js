import React, { useState } from 'react';
import UnauthView from './UnauthView';
import AuthView from './AuthView';
import LoadingView from './LoadingView';
import { UsersContext } from '../providers/UserAuthProvider';
import { useContext } from 'react';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/globalStyles';

const Root = () => {
  const cxt = useContext(UsersContext);
  const [theme, setTheme] = useState('light');

  console.log(theme);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler}>Switch Theme</button>
      {cxt.loading ? <LoadingView /> : null}
      {!cxt.loading && !cxt.isLogged ? <UnauthView /> : <AuthView />}
    </ThemeProvider>
  );
};

export default Root;
