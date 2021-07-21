import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { UserAuthProvider } from './providers/UserAuthProvider';
import MainTemplate from './templates/MainTemplate';
import { GlobalStyles } from './assets/styles/globalStyles';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserAuthProvider>
        <BrowserRouter>
          <MainTemplate>
            <Root />
          </MainTemplate>
        </BrowserRouter>
      </UserAuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
