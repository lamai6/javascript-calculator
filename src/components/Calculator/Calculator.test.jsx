import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('Product Backlog test suite', () => {
  it('should contain a clickable element containing "=" with #equals id (US#1)', () => {
    const { getByRole } = render(<Calculator />);
    const equalsButton = getByRole('button', { name: '=' });

    expect(equalsButton).toBeInTheDocument();
  });
});
