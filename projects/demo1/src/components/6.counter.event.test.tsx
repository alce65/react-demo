import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './6.counter.event';

describe('Counter component', () => {
  test('should render', async () => {
    // Arrange
    // const { getByText } = render(<Counter initial={0} />);
    render(<Counter initial={0} />);
    // Act
    const e = screen.getByRole('heading', { name: /Counter/i });
    // Assert
    expect(e).toBeInTheDocument();
    let n = screen.getByText(/0/i);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    await buttons[0].click();
    n = screen.getByText(/1/i);
    fireEvent.click(buttons[1]);
    n = screen.getByText(/0/i);
    await userEvent.click(buttons[0]);
    n = screen.getByText(/1/i);
    expect(n).toBeInTheDocument();
  });
});
