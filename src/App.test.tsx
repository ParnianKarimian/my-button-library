// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Button with correct text', () => {
  render(<App />);
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});
