import { fireEvent, screen } from '@testing-library/react';
import AddWordToDB from '../components/form/AddWordToDB';
import renderThemeProvider from '../helpers/renderThemeProvider';

describe('Form field', () => {
  it('Render the component', () => {
    renderThemeProvider(<AddWordToDB />);
    screen.getByText('Your word');
    screen.getByText('Article');
    screen.getByText('Meaning');
    screen.getByText('Add');
  });
  it('Handles value change', () => {
    renderThemeProvider(<AddWordToDB />);
    const inputWord = screen.getByPlaceholderText('type German word');
    const inputArticle = screen.getByPlaceholderText('type article');
    const inputTranslation = screen.getByPlaceholderText('translation');
    fireEvent.change(inputWord, { target: { value: 'Auto' } });
    fireEvent.change(inputArticle, { target: { value: 'das' } });
    fireEvent.change(inputTranslation, { target: { value: 'samochód' } });
    expect(inputWord).toHaveValue('Auto');
    expect(inputArticle).toHaveValue('das');
    expect(inputTranslation).toHaveValue('samochód');
  });
});
