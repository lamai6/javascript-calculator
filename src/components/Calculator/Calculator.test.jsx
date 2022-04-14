import { render, fireEvent } from '@testing-library/react';
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

  it('should contain a clickable element with an id="clear" (US#5)', () => {
    const { container } = render(<Calculator />);
    const clearButton = container.querySelector('button[id=clear]');

    expect(clearButton).toBeInTheDocument();
  });

  it('should contain an element to display values with a corresponding id="display" (US#6)', () => {
    const { container } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');

    expect(display).toBeInTheDocument();
  });

  it('should clear input value and show 0 in display element when pressing the clear button (US#7)', () => {
    const { container, getAllByRole } = render(<Calculator />);
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter((button) => button.innerHTML <= 9);
    const clearButton = container.querySelector('button[id=clear]');
    const input = container.querySelector('div[id=input]');
    const display = container.querySelector('div[id=display]');

    numeralButtons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(input).toHaveTextContent('0123456789');
    expect(display).toHaveTextContent('0123456789');

    fireEvent.click(clearButton);

    expect(input).toHaveTextContent('');
    expect(display).toHaveTextContent('0');
  });

  it('should display user input in display element as numbers are clicked (US#8)', () => {
    const { container, getAllByRole } = render(<Calculator />);
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter((button) => button.innerHTML <= 9);
    const display = container.querySelector('div[id=display]');
    let output = '';

    numeralButtons.forEach((button) => {
      fireEvent.click(button);
      output += button.innerHTML;
      expect(display).toHaveTextContent(output);
    });
  });

  it('should add numbers when equals button is pressed and display the result in #display element (US#9)', () => {
    const { container, getByRole, getAllByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter(
      ({ innerHTML }) => innerHTML > 0 && innerHTML <= 6
    );
    const addButton = getByRole('button', { name: '+' });
    const equalsButton = getByRole('button', { name: '=' });

    numeralButtons.forEach((button, i) => {
      if (i === 3) return fireEvent.click(addButton);
      return fireEvent.click(button);
    });

    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('179');
  });

  it('should subtract numbers when equals button is pressed and display the result in #display element (US#9)', () => {
    const { container, getByRole, getAllByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter(
      ({ innerHTML }) => innerHTML > 0 && innerHTML <= 6
    );
    const subtractButton = getByRole('button', { name: '-' });
    const equalsButton = getByRole('button', { name: '=' });

    numeralButtons.forEach((button, i) => {
      if (i === 3) return fireEvent.click(subtractButton);
      return fireEvent.click(button);
    });

    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('67');
  });

  it('should multiply numbers when equals button is pressed and display the result in #display element (US#9)', () => {
    const { container, getByRole, getAllByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter(
      ({ innerHTML }) => innerHTML > 0 && innerHTML <= 6
    );
    const multiplyButton = getByRole('button', { name: '*' });
    const equalsButton = getByRole('button', { name: '=' });

    numeralButtons.forEach((button, i) => {
      if (i === 3) return fireEvent.click(multiplyButton);
      return fireEvent.click(button);
    });

    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('6888');
  });

  it('should divide numbers when equals button is pressed and display the result in #display element (US#9)', () => {
    const { container, getByRole, getAllByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter(
      ({ innerHTML }) => innerHTML > 0 && innerHTML <= 6
    );
    const divideButton = getByRole('button', { name: '/' });
    const equalsButton = getByRole('button', { name: '=' });

    numeralButtons.forEach((button, i) => {
      if (i === 3) return fireEvent.click(divideButton);
      return fireEvent.click(button);
    });

    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent(/^2.1964$/);
  });
});
