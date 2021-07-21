import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { UserAuthProvider } from './providers/UserAuthProvider';
import MainWrapper from './templates/MainWrapper';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <BrowserRouter>
        <MainWrapper>
          <Root />
        </MainWrapper>
      </BrowserRouter>
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
