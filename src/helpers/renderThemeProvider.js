import { render } from '@testing-library/react';
import { lightTheme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const renderThemeProvider = (children) => {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);
};

export default renderThemeProvider;
