import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome screen', () => {
  render(<App />);
  const headingElement = screen.getByText(/진단 시작하기/i);
  expect(headingElement).toBeInTheDocument();
});
