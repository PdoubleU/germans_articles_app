import './style.css';
import Login from './views/Login';
import { UserAuthProvider } from '../src/providers/UserAuthProvider';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #bada55;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Root() {
  return (
    <>
      <Wrapper>
        <UserAuthProvider>
          <Login></Login>
        </UserAuthProvider>
      </Wrapper>
    </>
  );
}

export default Root;
