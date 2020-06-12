import React from 'react';
import { render } from '@testing-library/react';
import App from './App.jsx';

test('renders Journey to Myself', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Journey to Myself/i);
  expect(linkElement).toBeInTheDocument();
});
