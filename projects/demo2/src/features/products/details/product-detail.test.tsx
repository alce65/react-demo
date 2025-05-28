import { MemoryRouter as Router, Routes, Route } from 'react-router';
import { act, render, screen } from '@testing-library/react';
import { ProductDetail } from './product-detail';

describe('Products component', () => {
  beforeEach(() => {
    render(
      <Router initialEntries={['/productsDetail/123']}>
        <Routes>
          <Route path="/productsDetail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>,
    );
  });

  test('should render project info', () => {
    const info = screen.getByText(/Product/);
    expect(info).toBeInTheDocument();
  });

  test('should render product detail', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('123');
  });

  test('should navigate to home on button click', async () => {
    const button = screen.getByRole('button', { name: /Inicio/i });
    expect(button).toBeInTheDocument();
    await act(async () => button.click());
    expect(window.location.pathname).toBe('/'); // Assuming the home path is '/'
  });
});
