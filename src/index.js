import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { UserAuthProvider } from './providers/UserAuthProvider';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #bada55;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <Wrapper>
        <Root />
      </Wrapper>
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
