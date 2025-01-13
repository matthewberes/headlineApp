import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderComponent from './HeaderComponent';

describe('<HeaderComponent />', () => {
  test('it should mount', () => {
    render(<HeaderComponent />);

    const headerComponent = screen.getByTestId('HeaderComponent');

    expect(headerComponent).toBeInTheDocument();
  });
});