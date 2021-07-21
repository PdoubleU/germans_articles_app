import styled from 'styled-components';
import StyledNavbar from '../components/navigation/Navigation';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/globalStyles';
import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Wrapper>
        <StyledNavbar>
          <StyledButton onClick={themeToggler}>Switch Theme</StyledButton>
        </StyledNavbar>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default MainWrapper;
