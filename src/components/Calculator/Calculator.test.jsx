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
    const equalsButton = getAllByRole('button');
    const numeralButtons = equalsButton.filter(
      (button) => button.innerHTML <= 9
    );
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
});
