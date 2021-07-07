import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { UserAuthProvider } from './providers/UserAuthProvider';
import MainTemplate from './templates/MainTemplate';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <MainTemplate>
        <Root />
      </MainTemplate>
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
