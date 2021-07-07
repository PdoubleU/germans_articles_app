import styled from 'styled-components';
import StyledNavbar from '../components/navigation/Navigation';

const Wrapper = styled.div`
  background-color: #bada55;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <StyledNavbar></StyledNavbar>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
