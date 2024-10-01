import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/s&p 500 total return/i);
  expect(headerElement).toBeInTheDocument();
});
