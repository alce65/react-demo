import { render } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter as Router } from 'react-router';
import Home from '../../../features/home/home';
vi.mock('../../../features/home/home');

describe('App Component', () => {
  //Arrange

  beforeEach(() => {
    vi.clearAllMocks();
    
  });

  test('if route is /home call Home Component', () => {
    // Act
    render(
      <Router initialEntries={['/']}>
        <App />
      </Router>,
    );
    // Assert
    expect(Home).toHaveBeenCalled();
  });
});
