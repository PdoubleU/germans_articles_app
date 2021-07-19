import { fireEvent, screen } from '@testing-library/react';
import DisplayForm from '../components/form/DisplayForm';
import renderThemeProvider from '../helpers/renderThemeProvider';

describe('Form field', () => {
  it('Render the component', () => {
    renderThemeProvider(<DisplayForm />);
    screen.getByText('Your word');
    screen.getByText('Article');
    screen.getByText('Meaning');
    screen.getByText('Add');
  });
  it('Handles value change', () => {
    renderThemeProvider(<DisplayForm />);
    const inputWord = screen.getByPlaceholderText('ex. Geste, -n');
    const inputArticle = screen.getByPlaceholderText('ex. die');
    const inputTranslation = screen.getByPlaceholderText('ex. gest');
    fireEvent.change(inputWord, { target: { value: 'Auto' } });
    fireEvent.change(inputArticle, { target: { value: 'das' } });
    fireEvent.change(inputTranslation, { target: { value: 'samochód' } });
    expect(inputWord).toHaveValue('Auto');
    expect(inputArticle).toHaveValue('das');
    expect(inputTranslation).toHaveValue('samochód');
  });
});
