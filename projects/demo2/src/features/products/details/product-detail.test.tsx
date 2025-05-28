import { MemoryRouter as Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import { ProductDetail } from './product-detail';

describe('Products component', () => {
  test('should render project info', () => {
    render(
      <Router initialEntries={['/']}>
        <ProductDetail />
      </Router>,
    );
    const info = screen.getByText(/Product/);
    expect(info).toBeInTheDocument();
  });
});
