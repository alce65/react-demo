import { MemoryRouter as Router, Routes, Route } from 'react-router';
import { act, render, screen } from '@testing-library/react';
import { ProductDetail } from './product-detail';
import type { ProductRepository } from '@products/services/product.repo';
import { AppContext } from '@context/context';

describe('Products component', () => {
  const repoMock: ProductRepository = {
    getProductById: vi.fn().mockResolvedValue({ id: '1', name: 'Product 1' }),
  } as unknown as ProductRepository;

  const context = { productsRepo: repoMock } as AppContext;

  beforeEach(() => {
    render(
      <AppContext value={context}>
        <Router initialEntries={['/productsDetail/123']}>
          <Routes>
            <Route path="/productsDetail/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </AppContext>,
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
