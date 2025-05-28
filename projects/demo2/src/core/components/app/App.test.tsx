import { render } from '@testing-library/react';
import { App } from './App';
import { AppRoutes } from '@core/routes/routes';
vi.mock('@core/routes/routes');

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('AppRoutes is called', () => {
    // Act
    render(<App />);
    // Assert
    expect(AppRoutes).toHaveBeenCalled();
  });
});
