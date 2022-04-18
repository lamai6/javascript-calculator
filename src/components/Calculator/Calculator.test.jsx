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
      'seven',
      'eight',
      'nine',
      'four',
      'five',
      'six',
      'one',
      'two',
      'three',
      'zero',
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

    expect(input).toHaveTextContent('7894561230');
    expect(display).toHaveTextContent('7894561230');

    fireEvent.click(clearButton);

    expect(input).toHaveTextContent('');
    expect(display).toHaveTextContent('0');
  });

  it('should display user input in display element as numbers are clicked (US#8)', () => {
    const { container, getAllByRole } = render(<Calculator />);
    const buttons = getAllByRole('button');
    const numeralButtons = buttons.filter((button) => button.innerHTML <= 9);
    const display = container.querySelector('div[id=display]');

    numeralButtons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(display).toHaveTextContent('7894561230');
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

    expect(display).toHaveTextContent('479');
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

    expect(display).toHaveTextContent('433');
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

    expect(display).toHaveTextContent('10488');
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

    expect(display).toHaveTextContent(/^19.8261$/);
  });

  it('should not allow a number to begin with multiple zeros (US#10)', () => {
    const { container, getByRole } = render(<Calculator />);
    const input = container.querySelector('div[id=input]');
    const buttonZero = getByRole('button', { name: '0' });
    const buttonFive = getByRole('button', { name: '5' });
    const addButton = getByRole('button', { name: '+' });

    [...Array(4)].forEach(() => {
      fireEvent.click(buttonZero);
    });
    fireEvent.click(buttonFive);
    fireEvent.click(addButton);
    [...Array(4)].forEach(() => {
      fireEvent.click(buttonZero);
    });
    fireEvent.click(buttonFive);

    expect(input).toHaveTextContent('5+5');
  });

  it('should append a "." to the display and not allow 2 "." in a number (US#11)', () => {
    const { container, getByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttonFive = getByRole('button', { name: '5' });
    const dotButton = getByRole('button', { name: '.' });

    [...Array(3)].forEach(() => {
      fireEvent.click(buttonFive);
      fireEvent.click(dotButton);
    });

    expect(display).toHaveTextContent('5.55');
  });

  it('should perform any operation on numbers containing decimal points (US#12)', () => {
    const { container, getByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttonFive = getByRole('button', { name: '5' });
    const dotButton = getByRole('button', { name: '.' });
    const addButton = getByRole('button', { name: '+' });
    const equalsButton = getByRole('button', { name: '=' });

    fireEvent.click(buttonFive);
    fireEvent.click(dotButton);
    fireEvent.click(buttonFive);
    fireEvent.click(addButton);
    fireEvent.click(buttonFive);
    fireEvent.click(dotButton);
    fireEvent.click(buttonFive);
    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('11');
  });

  it('should keep the last operator (except "-") if 2 or more operators are entered consecutively (US#13)', () => {
    const { container, getByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttonFive = getByRole('button', { name: '5' });
    const multiplyButton = getByRole('button', { name: '*' });
    const subtractButton = getByRole('button', { name: '-' });
    const addButton = getByRole('button', { name: '+' });
    const equalsButton = getByRole('button', { name: '=' });

    fireEvent.click(buttonFive);
    fireEvent.click(addButton);
    fireEvent.click(multiplyButton);
    fireEvent.click(subtractButton);
    fireEvent.click(addButton);
    fireEvent.click(buttonFive);
    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('10');
  });

  it('should start a new calculation that operates on the result of the previous evaluation (US#14)', () => {
    const { container, getByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttonTwo = getByRole('button', { name: '2' });
    const buttonFive = getByRole('button', { name: '5' });
    const subtractButton = getByRole('button', { name: '-' });
    const divideButton = getByRole('button', { name: '/' });
    const equalsButton = getByRole('button', { name: '=' });

    fireEvent.click(buttonFive);
    fireEvent.click(subtractButton);
    fireEvent.click(buttonTwo);
    fireEvent.click(equalsButton);
    fireEvent.click(divideButton);
    fireEvent.click(buttonTwo);
    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('1.5');
  });

  it('should have at least 4 decimal places of precision when dividing 2 numbers gives a float result (US#15)', () => {
    const { container, getByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const buttonTwo = getByRole('button', { name: '2' });
    const buttonSeven = getByRole('button', { name: '7' });
    const divideButton = getByRole('button', { name: '/' });
    const equalsButton = getByRole('button', { name: '=' });

    fireEvent.click(buttonTwo);
    fireEvent.click(divideButton);
    fireEvent.click(buttonSeven);
    fireEvent.click(equalsButton);

    expect(display).toHaveTextContent('0.2857');
  });

  it('should remove operator after pressing dot button', () => {
    const { container, getByRole } = render(<Calculator />);
    const display = container.querySelector('div[id=display]');
    const divideButton = getByRole('button', { name: '/' });
    const dotButton = getByRole('button', { name: '.' });

    fireEvent.click(divideButton);
    fireEvent.click(dotButton);

    expect(display).toHaveTextContent('0.');
  });

  it('should reset input and result if the expression is invalid', () => {
    const { container, getByRole } = render(<Calculator />);
    const input = container.querySelector('div[id=input]');
    const display = container.querySelector('div[id=display]');
    const divideButton = getByRole('button', { name: '/' });
    const dotButton = getByRole('button', { name: '.' });
    const multiplyButton = getByRole('button', { name: '*' });
    const buttonTwo = getByRole('button', { name: '2' });
    const equalsButton = getByRole('button', { name: '=' });

    fireEvent.click(divideButton);
    fireEvent.click(dotButton);
    fireEvent.click(multiplyButton);
    fireEvent.click(buttonTwo);
    fireEvent.click(equalsButton);

    expect(input).toHaveTextContent('');
    expect(display).toHaveTextContent('0');
  });
});
