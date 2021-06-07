import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { UserAuthProvider } from './providers/UserAuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <Root />
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
