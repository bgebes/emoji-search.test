import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

it('should be rendered', () => {
  render(<Header />);

  const headerDOM = screen.getByTestId('header');
  expect(headerDOM).toBeInTheDocument();
});
