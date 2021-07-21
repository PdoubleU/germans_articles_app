import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { UserAuthProvider } from './providers/UserAuthProvider';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <BrowserRouter>
        <MainTemplate>
          <Root />
        </MainTemplate>
      </BrowserRouter>
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
