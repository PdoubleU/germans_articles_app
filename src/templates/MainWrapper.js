import styled from 'styled-components';
import StyledNavbar from '../components/navigation/Navigation';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/globalStyles';
import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Wrapper>
        <StyledNavbar>
          <StyledButton as="button" onClick={themeToggler}>
            Switch Theme
          </StyledButton>
        </StyledNavbar>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default MainWrapper;
