import { render, screen } from '@testing-library/react';
import LoadingView from '../views/LoadingView';

test('renders learn react link', () => {
  render(<LoadingView />);
  const linkElement = screen.getByText(/Please wait/i);
  expect(linkElement).toBeInTheDocument();
});
