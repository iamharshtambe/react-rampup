import { render, screen } from '@testing-library/react';
import About from '../components/About.js';
import '@testing-library/jest-dom';

describe('About Us - Test Cases', () => {
  test('should load about component', () => {
    render(<About />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  test('should load inputs in about component', () => {
    render(<About />);

    const inputBoxes = screen.getAllByRole('textbox');

    console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });
});
