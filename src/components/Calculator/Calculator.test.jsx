import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('Product Backlog test suite', () => {
  it('should contain a clickable element containing "=" with #equals id (US#1)', () => {
    const { getByRole } = render(<Calculator />);
    const equalsButton = getByRole('button', { name: '=' });

    expect(equalsButton).toBeInTheDocument();
  });

  it('should contain 10 clickable elements containing one number each from 0-9 with their own number as an id (US#2)', () => {
    const { getAllByRole } = render(<Calculator />);
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter((button) => button.innerHTML <= 9);
    const ids = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    const isButtonsIdCorrect = numeralButtons.every(
      (button, i) => button.id === ids[i]
    );

    expect(numeralButtons).toHaveLength(10);
    expect(isButtonsIdCorrect).toBe(true);
  });

  it('should contain 4 clickable elements each containing one of the 4 primary mathematical operators with their id (US#3)', () => {
    const { getAllByRole } = render(<Calculator />);
    const ids = ['add', 'subtract', 'multiply', 'divide'];
    const buttons = getAllByRole('button');
    const operatorButtons = buttons.filter((button) => ids.includes(button.id));

    expect(operatorButtons).toHaveLength(4);
  });

  it('should contain a clickable element containing a decimal point with a corresponding id="decimal" (US#4)', () => {
    const { getByRole } = render(<Calculator />);
    const dotButton = getByRole('button', { name: '.' });

    expect(dotButton).toBeInTheDocument();
    expect(dotButton).toHaveAttribute('id', 'decimal');
  });
});
