import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
  test('should render tittle received by props', () => {
    const title = 'Demo 06';
    const children = <div>Child Component</div>;
    render(<Header title={title}>{children}</Header>);
    const element = screen.getByText(title);
    const childElement = screen.getByText('Child Component');
    expect(element).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });
});
