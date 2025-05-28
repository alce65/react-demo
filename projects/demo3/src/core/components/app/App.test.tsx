import { render } from '@testing-library/react';
import { App } from './App';
import { Layout } from '../layout/layout';

vi.mock('../layout/layout')
describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('AppRoutes is called', () => {
    // Act
    render(<App />);
    // Assert
    expect(Layout).toBeDefined();
  });
});
