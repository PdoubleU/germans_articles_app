import { render } from '@testing-library/react';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const renderThemeProvider = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default renderThemeProvider;
