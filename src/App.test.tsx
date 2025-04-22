import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Button with correct text', () => {
  render(<App />);
  const button = screen.getByText(/click/i);
  expect(button).toBeInTheDocument();
});
