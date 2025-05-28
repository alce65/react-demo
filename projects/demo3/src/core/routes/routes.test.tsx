import { MemoryRouter as Router } from 'react-router';
import { render, waitFor } from '@testing-library/react';
import { AppRoutes } from './routes';
import Home from '@home/home';

vi.mock('@home/home');

describe('AppRoutes', () => {
  //Arrange

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Home is called lazy', async () => {
    // Act
    render(
      <Router initialEntries={['/']}>
        <AppRoutes />
      </Router>,
    );
    // Assert
    await waitFor(() => {
      expect(Home).toHaveBeenCalled();
    });
  });
});
