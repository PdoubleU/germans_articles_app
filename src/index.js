import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { UserAuthProvider } from './providers/UserAuthProvider';
import MainTemplate from './templates/MainTemplate';
import { GlobalStyles } from './assets/styles/globalStyles';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserAuthProvider>
        <MainTemplate>
          <Root />
        </MainTemplate>
      </UserAuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
