import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInputComponent from './TextInputComponent';

describe('<TextInputComponent />', () => {
  test('it should mount', () => {
    render(<TextInputComponent />);

    const textInputComponent = screen.getByTestId('TextInputComponent');

    expect(textInputComponent).toBeInTheDocument();
  });
});